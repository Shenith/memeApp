import React, {Fragment, useEffect, useState, useRef} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Linking, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import PostCard from '../Components/PostCard';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import WelcomeScreen from './WelcomeScreen';
import Loader from '../Components/Loader';

const Main = (props) => {

    const [ memeData, setMemeData ] = useState([]);
    const [ pageNum, setPageNum ] = useState(1);
    const [ pageLoadParam, setPageLoadParam ] = useState(0);
    const [ loading, setLoading ] = useState(true);
    const [ load, setLoad ] = useState(false);

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
        <Loader loadStatus={load}/>
        { loading ?
            <WelcomeScreen />
        :
        <View>
        <StatusBar hidden={true} />
        <View style={styles.postCont}>
            <ScrollView contentContainerStyle={styles.mainCont}>
                <FlatList
					data={memeData}
					keyExtractor={item => item.id}
					renderItem={({ item }) =>
                        <PostCard imgName={item.file_name}/>
					}
				/>

                <View style={styles.mainBtnCont}>
                    <TouchableOpacity onPress={goHomePage} style={styles.backBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/home.png')}
                    />
                    </TouchableOpacity>

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
                    <TouchableOpacity onPress={() => Linking.openURL('fb://page/1764669670233157').catch((err) => console.log('An error occurred', err))} style={styles.backBtn}>
                    <Image
                        style={styles.icon}
                        source={require('../../res/fb.png')}
                    />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
        <View style={styles.addCont}>
            
        </View>
        </View>
        }
    </View>
  );
};

const styles = StyleSheet.create({
    mainCont: {
        backgroundColor:'#e0e0eb',
        alignItems:'center'
    },
    postCont:{
        height:responsiveHeight(92),
        width:responsiveWidth(100)
    },
    addCont:{
        height:responsiveHeight(8),
        width:responsiveWidth(100),
        backgroundColor:'#e0e0eb',
        alignItems:'center'

    },
    mainBtnCont:{
        height:responsiveHeight(8),
        width:responsiveWidth(60),
        flexDirection:'row'
    },
    backBtn:{
        height:responsiveHeight(8),
        width:responsiveWidth(10),
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
    txt:{
        fontSize:responsiveFontSize(1.5)
    }
})

export default Main;
