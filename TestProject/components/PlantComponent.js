import * as React from 'react';
import { useState, useEffect } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	ScrollView,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { browserPopupRedirectResolver } from '@firebase/auth';
import {
	Card,
	Title,
	Paragraph,
	LeftContent,
	Button,
} from 'react-native-paper';

const { width, height } = Dimensions.get('window');
const PlantComponent = (props) => {
	const [imageUrl, setImageUrl] = useState(null);
	const [plant, setPlant] = useState({});

	useEffect(() => {
		setPlant(props.plant);

		const fetchImage = async () => {
			const reference = ref(getStorage(), plant.id);
			await getDownloadURL(reference)
				.then((url) => {
					console.log('Image url: ', url);
					setImageUrl(url);
				})
				.catch((error) => console.log('Error while fetching image: ', error));
		};

		if (plant != {}) {
			// fetchImage();
		}
	});

	return (
		<View style={styles.bottomcard}>
			<Card style={{ backgroundColor: '#3a5a40' }}>
				<Card.Cover source={{ uri: plant.plantImage }} />
				{plant ? (
					<Text style={styles.titlebox}>{plant.plantName}</Text>
				) : (
					<Text style={styles.titlebox}>...</Text>
				)}

				<Card.Actions>
					<Icon name='pencil' color='white' size={30} />
					<Icon name='list' color='white' size={30} />
				</Card.Actions>
			</Card>
		</View>
		// <View style={styles.section}>
		// 	<View style={styles.bottomcard}>
		// 		<View style={styles.upperbox}>
		// 			<Image source={{ uri: plant.plantImage }} style={styles.plantImg} />

		// 			{plant ? (
		// 				<Text style={styles.titlebox}>{plant.plantName}</Text>
		// 			) : (
		// 				<Text style={styles.titlebox}>...</Text>
		// 			)}

		// 			{/* <Icon3 style={styles.iconbox} name='smile' size={80} /> */}
		// 			<View>
		// 				<Pressable
		// 					style={styles.box}
		// 					onPress={() => navigation.navigate('All Plants')}
		// 					android_ripple={{ borderless: true, radius: 20 }}
		// 				>
		// 					<Icon name='list' size={50} />
		// 					{/* <Text style={styles.subtitlebox}>Details</Text> */}
		// 				</Pressable>
		// 			</View>
		// 			<View style={styles.buttonContainer}>
		// 				<Pressable
		// 					style={styles.box}
		// 					onPress={() => navigation.navigate('All Plants')}
		// 					android_ripple={{ borderless: true, radius: 20 }}
		// 				>
		// 					<Icon name='pencil' size={20} />
		// 					{/* <Text style={styles.subtitlebox}>Edit</Text> */}
		// 				</Pressable>
		// 			</View>
		// 		</View>
		// 		{/* <View style={styles.lowerbox}>
		// 		<View>
		// 			<Pressable
		// 				style={styles.box}
		// 				onPress={() => navigation.navigate('All Plants')}
		// 				android_ripple={{ borderless: true, radius: 20 }}
		// 			>
		// 				<Icon name='list' size={50} />
		// 				<Text style={styles.subtitlebox}>Details</Text>
		// 			</Pressable>
		// 		</View>
		// 		<View>
		// 			<Pressable
		// 				style={styles.box}
		// 				onPress={() => navigation.navigate('All Plants')}
		// 				android_ripple={{ borderless: true, radius: 20 }}
		// 			>
		// 				<Icon name='pencil' size={50} />
		// 				<Text style={styles.subtitlebox}>Edit</Text>
		// 			</Pressable>
		// 		</View>
		// 	</View> */}
		// 	</View>
		// </View>
	);
};

export default PlantComponent;

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	plantImg: {
		//width: 100,
		//height: 100,
		//borderRadius: 50,
		//margin: 10,
		height: 125,
		width: 125,
	},
	subtitle: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		paddingBottom: 0,
		paddingLeft: 20,
	},
	subtitlebutton: {
		paddingBottom: 0,
		fontSize: 25,
		fontWeight: 'bold',
		padding: 10,
	},
	notification: {
		fontSize: 18,
		textDecorationLine: 'underline',
		color: '#ffb74d',
	},
	notificationcard: {
		backgroundColor: '#fcf8e3',
		margin: 8,
		borderColor: '#fbeed5',
		borderWidth: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	bottomcard: {
		// borderRadius: 15,
		// padding: 0,
		// marginTop: 10,
		// marginBottom: 10,
		// width: width * 0.9,
		// backgroundColor: 'white',
		// overflow: 'hidden',
		// height: 100,
		width: width * 0.95,
		marginBottom: 20,
	},
	upperbox: {
		flex: 1,
		alignItems: 'flex-start',
		//paddingBottom: 10,
		flexDirection: 'row',
		//justifyContent: 'space-between',
		//borderWidth: 1,
		alignSelf: 'stretch',
		borderColor: 'green',
	},
	iconbox: {
		padding: 10,
	},
	lowerbox: {
		borderColor: 'red',
		borderTopWidth: 2,
		paddingTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	box: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 10,
	},
	subtitlebox: {
		marginLeft: 10,
		fontSize: 25,
		borderWidth: 2,
		//borderColor: 'green',
	},
	titlebox: {
		marginLeft: 20,
		fontSize: 18,
		fontWeight: '600',
		//borderWidth: 1,
		marginTop: 10,
		color: 'white',
	},
	flexrow: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	icon: {
		color: '#ffb74d',
		marginRight: 10,
	},
	close: {
		color: '#ffb74d',
		textAlign: 'right',
		padding: 10,
	},
	pressable: {
		right: 0,
	},
	section: {
		marginBottom: 10,
	},
	uppercard: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	containermain: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 40,
		paddingBottom: 40,
		paddingLeft: 20,
		paddingRight: 20,
	},
});
