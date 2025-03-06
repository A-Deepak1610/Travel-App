import {StyleSheet } from 'react-native'
 export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:0,
    },
    image:{
        width: '100%',
        height:210,
    },
    textHeader:{
        color:'white',
    },
    textCointainer:{
        marginTop:110,
        width: '100%',
        height:100,
        padding:20,
        backgroundColor:"rgba(45, 45, 45, 0.5)",
    },
    discover:{
        color:'white',
        fontSize:27,
        fontWeight:'bold',
    },
    adventure:{
        color:'white',
        fontSize:20,
        fontWeight:'480',
    },
    switch:{
        transform :[{scaleX:1.2},{scaleY:1.1}]
    },
    switchContainer:{
        top:7,
        right:22,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        height:50,
    },
    switchText:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        marginRight:10,
    }


})