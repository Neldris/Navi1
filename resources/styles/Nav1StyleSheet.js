/**
 * Created by richie on 02/01/18.
 */

import {
    StyleSheet,
    Dimensions,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderRadius:500,
        margin:20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color:'thistle',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    header:{
        height:50,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title:{
        color:'white',
    },
    gen_container:{
        flex:1,
    },
    landing_container:{
        flex: 1,
    },
    landing_img:{
        flex:1,
        alignSelf: 'stretch'
    },
    landing_loader:{
        position: 'absolute',
        zIndex: 10,
    },
    login_container:{
        backgroundColor:'#2896d3',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:40,
        paddingLeft:40,
    },
    login_header:{
        borderColor: '#ccc',
        marginBottom:30,
    },
    login_text_imput:{
        fontSize:16,
        color: '#c2c2d6',
        padding: 10,
        alignSelf: 'stretch',
        backgroundColor:'white',
        marginBottom:20,
    },
    login_text:{
        color:'white',
        fontSize:24,
    },
    login_btn:{
        backgroundColor:'#01c853',
        justifyContent:'center',
        alignSelf:'stretch',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
    },
    login_txt:{
        color:'white',
        fontSize:16,
    },
    login_register:{
        marginTop:20

    },
    login_header_img:{
        height:100,
        width: 100,
        marginBottom: 30,
    }
});

export default styles;