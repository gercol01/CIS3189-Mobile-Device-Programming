import * as React from 'react';
import {Button, ScrollView, View, Text, StyleSheet, Pressable, FlatList} from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import AccordionItem from '../../assets/components/AccordionItem';

export default function SettingsScreen({navigation}){
    const [isModalFAQVisible, setIsModalFAQVisible] = React.useState(false);
    const [isModalChangePasswordVisible, setIsModalChangePasswordVisible] = React.useState(false);

    const handleFAQModal = () => setIsModalFAQVisible(() => !isModalFAQVisible);
    const handleChangePasswordModal = () => setIsModalChangePasswordVisible(() => !isModalChangePasswordVisible);

    const data = [
        {
            id: 0,
            title: 'How do you add a Plant?',
            body: "To add a plant simply",
        },
        {
            id: 1,
            title: 'How do I add a Plant sensor?',
            body: "To add a plant simply",
        },
        {
            id: 2,
            title: 'How do I identify the state of my plant?',
            body: "To add a plant simply",
        },
    ];

    return(
        <View style={styles.containermain}>
            <View style={styles.section}>
                <Pressable style={styles.card} onPress={() => navigation.navigate('FAQ')}  android_ripple={{borderless:true, radius:20}}>
                    <View style={styles.flexrow}>
                        <Icon style = {styles.icon} name= 'log-out-outline' size={35}/>
                        <Text style={styles.text}>
                            Log out
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={styles.card} onPress={handleChangePasswordModal} android_ripple={{borderless:true, radius:20}}>
                    <View style={styles.flexrow}>
                        <Icon style = {styles.icon} name= 'key-outline' size={30}/>
                        <Text style={styles.text}>
                            Change password
                        </Text>
                    </View>
                </Pressable>
                <Modal isVisible={isModalChangePasswordVisible}>
                    <View style={{ flex: 1 }}>
                        <View style={styles.card}>
                            <Text>Change Password</Text>
                        </View>
                        <Button title="Hide modal" onPress={handleChangePasswordModal} />
                    </View>
                </Modal>
                <Pressable style={styles.card} onPress={handleFAQModal} android_ripple={{borderless:true, radius:20}}>
                    <View style={styles.flexrow}>
                        <Icon style = {styles.icon} name= 'help-circle-outline' size={30}/>
                        <Text style={styles.text}>
                            FAQ
                        </Text>
                    </View>
                </Pressable>
                <Modal style = {{ padding: 20, margin: 0, backgroundColor: "white" }} isVisible={isModalFAQVisible}>
                    <ScrollView style={styles.modalcontainer}>
                        <Text style={styles.titlemodal}>
                            FAQ:
                        </Text>
                        <View>
                            <FlatList
                                data = {data}
                                keyExtractor = {(item) => item.id.toString()}
                                renderItem = {({item}) => (<AccordionItem title= {item.title} bodyText = {item.body}/>
                                )}
                            />
                        </View>
                        <Button title="Hide modal" onPress={handleFAQModal} />
                    </ScrollView>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalcontainer:{
        // paddingTop: 60,
        // padding: 20,
        flex: 1,
    },
    titlemodal:{
        paddingTop: 60,
        paddingBottom: 20,
        fontSize: 25,
        color: '#000000',
        fontWeight: 'bold',
    },
    subtitlemodal:{
        fontSize: 20,
        color: '#000000'
    },
    text: {
        fontSize: 25,
        color: '#000000'
    },
    card: {
        margin: 8,
        borderColor: "#000000",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    iconbox: {
        padding: 10,
    },
    lowerbox: {
        borderColor: "#fbeed5",
        borderTopWidth:2,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
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
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    icon: {
        color: '#000000',
        marginRight: 20,
        paddingLeft: 20,
    },
    pressable: {
        right: 0
    },
    section: {
        paddingTop: 40,
        marginBottom: 40,
    },
    uppercard: {
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems:'flex-end',
    },
    containermain: {
        flex:1,
        backgroundColor:'white',
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20,
    },

});