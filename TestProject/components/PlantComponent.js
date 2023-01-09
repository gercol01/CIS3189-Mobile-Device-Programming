import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Feather';

const PlantComponent = (props) => {
    const [plantName, setPlantName] = useState();
    props.plant.get().then((documentSnapshot) => {
        const tempPlantName = documentSnapshot.get('plantName');
        setPlantName(tempPlantName);
    })

    return (
        <View style={styles.section}>
        <View style={styles.bottomcard}>
            <View style={styles.upperbox}>
                <Text style={styles.titlebox}>{plantName}</Text>
                <Icon3 style={styles.iconbox} name='smile' size={80} />
            </View>
            <View style={styles.lowerbox}>
                <View>
                    <Pressable
                        style={styles.box}
                        onPress={() => navigation.navigate('All Plants')}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        <Icon name='list' size={50} />
                        <Text style={styles.subtitlebox}>Details</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable
                        style={styles.box}
                        onPress={() => navigation.navigate('All Plants')}
                        android_ripple={{ borderless: true, radius: 20 }}
                    >
                        <Icon name='pencil' size={50} />
                        <Text style={styles.subtitlebox}>Edit</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
    );
    
};

export default PlantComponent;

const styles = StyleSheet.create({
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
		padding: 20,
		marginTop: 10,
		borderColor: '#fbeed5',
		borderWidth: 2,
		marginBottom: 10,
	},
	upperbox: {
		alignItems: 'center',
		paddingBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconbox: {
		padding: 10,
	},
	lowerbox: {
		borderColor: '#fbeed5',
		borderTopWidth: 2,
		paddingTop: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	box: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	subtitlebox: {
		marginLeft: 10,
		fontSize: 25,
	},
	titlebox: {
		marginLeft: 10,
		fontSize: 35,
		fontWeight: 'bold',
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
		marginBottom: 40,
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
