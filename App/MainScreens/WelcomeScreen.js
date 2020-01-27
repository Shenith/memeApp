import React, {Fragment} from 'react';
import { Image, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const WelcomeScreen = () => {

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    };
    
    return (
        <View style={styles.mainCont}>
            <StatusBar hidden={true} />
            <Image
                style={styles.icon2}
                source={require('../../res/appIcon.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    icon2:{
        height:responsiveHeight(15),
        width:responsiveHeight(15),
        resizeMode:'stretch'
    },
    mainCont:{
        justifyContent:'center',
        alignItems:'center',
        width: responsiveWidth(100),
        height:responsiveHeight(100)
    }
})

export default WelcomeScreen;
