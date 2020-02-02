import React, {Fragment, useState} from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import ImageViewer from 'react-native-image-zoom-viewer';

const PostCard = (props) => {

    const [ imgVisible, setImgVisible ] = useState(false);

    const images = [{
        url: 'https://www.ideabackery.com/memes/uploads/files/' + props.imgName,
        resizeMode:'contain'
    }]

  return (
      <View style={styles.mainCont}>
          <TouchableOpacity onPress={() => setImgVisible(true)} style={styles.imgCont}>
            <Image
                style={styles.img}
                source={{uri: 'https://www.ideabackery.com/memes/uploads/files/' + props.imgName}}
            />
          </TouchableOpacity>

            <Modal
                visible={imgVisible}
                transparent={true}
                onRequestClose={() => setImgVisible(false)}>
                <ImageViewer imageUrls={images}/>
            </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
    mainCont: {
        width:responsiveWidth(96),
        height:responsiveHeight(48),
        backgroundColor:'white',
        borderRadius:10,
        marginTop:responsiveHeight(2),
        alignItems:'center'
    },
    imgCont: {
        width: responsiveWidth(90),
        height: responsiveHeight(46),
        marginTop:responsiveHeight(2)
    },
    img:{
        width: responsiveWidth(90),
        height: responsiveHeight(44),
        resizeMode:'contain'
    },
    btnCont:{
        width:'100%',
        height:responsiveHeight(8),
        borderTopColor: '#d0d0e1',
        borderTopWidth:1,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
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
        textAlign:'center',
        fontSize:responsiveFontSize(2)
    }

})

export default PostCard;
