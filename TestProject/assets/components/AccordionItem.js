import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccordionItem = ({title, bodyText}) => {
    const[showContent, setShowContent] = React.useState(false);

    let iconName;
    if(showContent==false){
        iconName = 'chevron-down-circle-outline'
    }else if(showContent==true){
        iconName = 'chevron-up-circle'
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={()=> setShowContent(!showContent)}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Icon name= {iconName} size={30}/>
                </View>
            </Pressable>
            {showContent && (
                <View style={styles.bodycontainer}>
                    <Text style={styles.body}>{bodyText}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 12,
        borderColor: 'black',
        marginBottom: 10,
        borderColor: "#000000",
        borderWidth: 1,
        overflow: 'hidden',
    },
    title: {
        fontSize: 20,
        color: '#2d2d2d',
        fontWeight: 'bold',
    },
    bodycontainer: {
        borderTopWidth: 1,
        marginTop: 5,
        borderColor: '#E3E3E3',
    },
    body: {
        paddingTop:5,
        fontSize: 16,
        color: '#2d2d2d',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export default AccordionItem;