import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from '../MainScreens/Main';
import WelcomeScreen from '../MainScreens/WelcomeScreen';


const AppNavigator = createStackNavigator({
        Main: {screen: Main},
        WelcomeScreen: {screen: WelcomeScreen}
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none'
    });

export default createAppContainer(AppNavigator);