import React, {Fragment, useEffect, useState, useRef} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Linking, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import PostCard from '../Components/PostCard';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import WelcomeScreen from './WelcomeScreen';
import Loader from '../Components/Loader';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

const Main = (props) => {

    const [ memeData, setMemeData ] = useState([]);
    const [ pageNum, setPageNum ] = useState(1);
    const [ pageLoadParam, setPageLoadParam ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ load, setLoad ] = useState(false);
    const [ flatlistRef, setFlatListRef ] = useState('');

    const ITEM_HEIGHT = responsiveHeight(50);

    // const reference = useRef();

    const loadScreen = async (n, pn) => {
        return fetch('https://www.ideabackery.com/memes/index.php/get_memes/' + n)
            .then((response) => {
                return response.json();
            })
            .then((resJson) => {
                console.log('response', resJson);
                if (resJson.status == 1) {
                    setPageLoadParam(n);
                    setPageNum(pn);
                    setMemeData(resJson.data);
                } else {
                    console.log('error', resJson.data);
                    alert(resJson.data);
                }
                if(flatlistRef){
                    flatlistRef.scrollToIndex({animated: false,index:0});
                };
                setLoading(false);
                setLoad(false);
            })
            .catch((error) => {
                console.log('exeption',error);
                alert('Something went wrong');
                setLoading(false);
                setLoad(false);
        });
    }

    const goNextPage = () => {
        setLoad(true);
        loadScreen(pageLoadParam + 10 , pageNum + 1);
    }

    const goBackPage = () => {
        setLoad(true);
        loadScreen(pageLoadParam - 10 , pageNum - 1)
    }

    const goHomePage = () => {
        setLoad(true);
        loadScreen(0 , 1);
    }

    useEffect(() => {
        console.log('useeffect run');
        loadScreen(0 , 1);
    },[]);


  return (
    <View>
        <StatusBar hidden={true} />
        <Loader loadStatus={load}/>
        { loading ?
            <WelcomeScreen />
        :
        <View>
        
        <View style={styles.postCont}>
                <FlatList
                    scrollEnabled={true}
                    data={memeData}
                    ref={(ref) => { setFlatListRef(ref) }}
                    getItemLayout={(memeData, index) => (
                        {length: ITEM_HEIGHT,offset: ITEM_HEIGHT * index, index}
                    )}
					keyExtractor={item => item.id}
					renderItem={({ item }) =>
                        <PostCard imgName={item.file_name}/>
					}
				/>

                
                <View style={styles.mainBtnCont}>
                <TouchableOpacity onPress={() => Linking.openURL('fb://page/102587961316116').catch((err) => console.log('An error occurred', err))} style={styles.contentBar}>
                    <Image
                        style={styles.icon2}
                        source={require('../../res/contactUs.png')}
                    />
                </TouchableOpacity>
                { (1<pageNum) ?
                    <TouchableOpacity onPress={goHomePage} style={styles.backBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/home.png')}
                    />
                    </TouchableOpacity>
                    :
                    <View style={styles.backBtn} />
                }

                { (1<pageNum) ?
                    <TouchableOpacity onPress={goBackPage} style={styles.backBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/back.png')}
                    />
                    </TouchableOpacity>
                    :
                    <View style={styles.backBtn} />
                }
                
                <View style={styles.pageNum}>
                    <Text style={styles.txt}>{pageNum}</Text>
                </View>
                <TouchableOpacity onPress={goNextPage} style={styles.nextBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/next.png')}
                    />
                </TouchableOpacity>
                
                <View style={styles.backBtn} />
                <View style={styles.contentBar} />
                </View>
        </View>
        {/* <View style={styles.addCont}> */}
            {/* <BannerAd
            unitId={"ca-app-pub-3940256099942544/6300978111"}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded');
            }}
            onAdFailedToLoad={(error) => {
                console.log('Advert failed to load: ', error);
            }}
        /> */}
        {/* </View> */}
        </View>
        }
        
    </View>
  );
};

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor:'#e0e0eb',
        alignItems:'center',
        justifyContent:'center'
    },
    postCont:{
        backgroundColor:'#ededf0',
        height:responsiveHeight(100),
        width:responsiveWidth(100),
        alignItems:'center',
        justifyContent:'center'
    },
    addCont:{
        height:responsiveHeight(10),
        width:responsiveWidth(100),
        backgroundColor:'#ededf0',
        alignItems:'center'

    },
    mainBtnCont:{
        height:responsiveHeight(8),
        width:responsiveWidth(100),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    backBtn:{
        height:responsiveHeight(8),
        width:responsiveWidth(10),
        alignItems:'center',
        justifyContent:'center'
    },
    contentBar:{
        height:responsiveHeight(8),
        width:responsiveWidth(20),
        alignItems:'center',
        justifyContent:'center'
    },
    nextBtn:{
        height:responsiveHeight(8),
        width:responsiveWidth(10),
        alignItems:'center',
        justifyContent:'center'
    },
    pageNum:{
        height:responsiveHeight(8),
        width:responsiveWidth(20),
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        height:responsiveHeight(3),
        width:responsiveHeight(3),
        resizeMode:'stretch'
    },
    icon2:{
        width:responsiveWidth(18),
        resizeMode:'contain'
    },
    txt:{
        fontSize:responsiveFontSize(1.5)
    }
})

export default Main;
