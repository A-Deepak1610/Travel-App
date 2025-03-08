import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: 740,
    backgroundColor: 'white',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 10,
    shadowRadius: 60,
    elevation: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
  },
  box1: {
    display:"flex",
    flexDirection:"column",
  },
  text1: {
    marginTop:30,
    color: 'white',
    padding: 10,
    backgroundColor: '#00c2b2',
    width: '100%',
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    color: 'black',
    fontSize: 20,
    marginTop:13,
    left: 20,
  },

  plan: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#4e01bd',
    marginTop: 40,
    borderRadius: 10,
    height: 50,
    color: 'white',
    padding: 6,
    fontSize: 25,
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  footer: {
    color: 'gray',
    fontSize: 15,
    paddingVertical: 20,
    marginTop:10,
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
btn:{
    width:'90%'
},
centeredView:{
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.5)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row'
},
modalView:{
    width:'85%',
    height:300,
    backgroundColor:'white',
    borderRadius:20,
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
},
image:{
    width:100,
    height:100,
},
modalText:{
    color:'black',
    fontSize:23,
    fontWeight:'600',
},
modalText1:{
    width:'80%',
    color:'gray',
    fontSize:18,
    textAlign:'center',
    padding:10,
},
modalText2:{
    width:'50%',
    backgroundColor:'#4e01bd',
    color:'white',
    textAlign:'center',
    padding:10,
    borderRadius:10,
    fontSize:20,
}
});
