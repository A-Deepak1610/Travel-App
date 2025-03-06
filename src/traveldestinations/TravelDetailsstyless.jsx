import {StyleSheet } from 'react-native'
 export const styles = StyleSheet.create({
    container:{
        marginTop:20,
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
        paddingVertical: 10,
        paddingHorizontal: 20,

    },
    text:{
        color:"black",
        fontWeight:"bold",
        fontSize:24,
    },
    destination:{
        top:20,
        width:"100%",
        height:65,
        borderRadius:10,
        backgroundColor:"#f0f0f0",
        paddingVertical:3,
        paddingHorizontal:10
    },
    destinationText:{

    },
    input:{
        fontSize:18,
        marginLeft:5,
        color:"black"
    },
    date:{
        color:"black",
        top:40,
        width:"100%",
        height:65,
        borderRadius:10,
        backgroundColor:"#f0f0f0",
        paddingVertical:3,
        paddingHorizontal:10
    },
    datetext:{
        color:"gray",
        fontWeight:"500"
    },
    destinationtext:{
        color:"gray",
        fontWeight:"500"
    }

 })