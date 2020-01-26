import React, {Fragment} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

const PostCard = (props) => {
  return (
      <View style={styles.mainCont}>
          <View style={styles.imgCont}>
            <Image
                style={styles.img}
                source={{uri: 'https://www.ideabackery.com/memes/uploads/files/' + props.imgName}}
            />
          </View>
          <View style={styles.btnCont}>
                <View style={styles.leftBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/heart2.png')}
                    />
                <Text style={styles.txt}>{props.likes}</Text>
                </View>
                <View  style={styles.rightBtn}>
                    <Image
                        style={styles.icon2}
                        source={require('../../res/share.png')}
                    />
                </View>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    mainCont: {
        width:responsiveWidth(96),
        height:responsiveHeight(60),
        backgroundColor:'white',
        borderRadius:10,
        marginTop:responsiveHeight(5),
        alignItems:'center'
    },
    imgCont: {
        width: responsiveWidth(90),
        height: responsiveHeight(50),
        marginTop:responsiveHeight(2)
    },
    img:{
        width: responsiveWidth(90),
        height: responsiveHeight(48),
        resizeMode:'contain'
    },
    btnCont:{
        width:'100%',
        height:responsiveHeight(8),
        borderTopColor: '#d0d0e1',
        borderTopWidth:1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection:'row'
    },
    leftBtn:{
        height:responsiveHeight(8),
        width: '50%',
        borderBottomStartRadius: 10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    rightBtn:{
        height:responsiveHeight(8),
        width: '50%',
        borderBottomEndRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        height:responsiveHeight(5),
        width:responsiveHeight(5),
        resizeMode:'stretch'
    },
    icon2:{
        height:responsiveHeight(4.5),
        width:responsiveHeight(4.5),
        resizeMode:'stretch'
    },
    txt:{
        marginLeft:responsiveWidth(2),
        fontSize:responsiveFontSize(2)
    }

})

export default PostCard;
