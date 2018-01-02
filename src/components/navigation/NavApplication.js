/**
 * Created by richie on 31/12/17.
 */
import {StackNavigator} from 'react-navigation'
import Home from '../home/Home';
import Login from '../login/Login';
import  Landing from '../Landing/Landing';

const NavApplication = StackNavigator({
    Landing : {screen: Landing},
    Login : {screen:Login},
    Home : {screen: Home},


},{
    navigationOptions:{
        header:false,
    }
});

export default  NavApplication;