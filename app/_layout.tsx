import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
export default function RootLayout(){
  return(
    <View style={styles.container}>
      <View style={styles.card}>
          <Text style={styles.header}>ITAM-1</Text>
          <Text style={styles.subHeader}>3 members</Text>
          <Text style={styles.message}>good work </Text>
          <View style={styles.tags}>
            <Text style={styles.tag}>Design</Text>
            <Text style={styles.tag}>UI/UX</Text>
            <Text style={styles.tag}>Figma</Text>
          </View>
          <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.buttonText}>Click</Text>
          </TouchableOpacity>
      </View>
    </View>

    
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#f5f5f5"
  },
  card:{
    width:"90%",
    backgroundColor:"#fff",
    borderRadius:10,
    padding:20,
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:8,
    elevation:5,
    borderWidth:1,
    borderColor:"#e0e0e0",
    marginBottom:20,
    },
    header:{
      fontSize:18,
      fontWeight:"bold",
      color:"#000"
    },
    subHeader:{
      fontSize:14,
      color:"#666",
      marginVertical:5,
    },
    message :{
      fontSize:14,
      color:"#333",
      marginVertical:10
    },
    tag:{
      backgroundColor:"#e0e0e0",
      color:"#000",
      fontSize:12,
      padding:5,
      marginRight:8,
      borderRadius:5
    },
    tags:{
      flexDirection:"row",
      marginTop:10
    },
    acceptButton:{
      backgroundColor:"#007bff",
      paddingVertical:10,
      paddingHorizontal:15,
      borderRadius:5,
      marginTop:15,
      alignItems:"center"
    },
    buttonText :{
      color:"#fff",
      fontSize:16
    }
})