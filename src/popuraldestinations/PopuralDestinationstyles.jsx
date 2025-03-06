import {StyleSheet } from 'react-native'
 export const styles = StyleSheet.create({
    container:{
        marginTop:15,
        display:'flex',
        width:'100%',
        alignItems:'center',
    },
    box:{
        width: '90%',
        height:250,
        backgroundColor:"white",
        shadowColor:'rgb(0, 0, 0)',
        shadowOpacity:10,
        shadowRadius:60,
        elevation:20,
        borderRadius:10,
    },
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize:24,
        marginTop:8,
        marginLeft:17,
    },
    box1:{
        display:"flex",
        flexDirection:"column",
        width:250,
        padding:20,
    },
    image1:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        width:230,
        height:150,
    },
    text1:{
        color:"black",
        fontSize:19,
        marginTop:5,
        marginLeft:10,
        fontWeight:"700"
    }

 })