import { Text,View,Image,TextInput,StyleSheet,Pressable } from "react-native";
const Chatbot=()=>{
    const styles = StyleSheet.create({
        container:{
            backgroundColor: "#A4F59D",
            flex: 1,
            alignItems: "center",
            padding:20
        },
        topContainer:{
            marginTop:50,
            width:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
        },
        icons:{
            width:60,
            height:60
        },
        cart:{
            width:40,
            height:45
        },
        exit:{
            width:30,
            height:30
        },
        middleContainer:{
            marginTop: 150,
            alignItems: 'center',
        },
        clickContainer:{
            display:'flex',
            flexDirection:'row',
        },
        input: {
            width: "90%",
            marginTop: 150,
            borderRadius: 12,
            padding: 10,
            backgroundColor: "#f0f0f0",
          },
          clickable:{
            width: '45%',
      margin: 5,
      borderRadius: 20,
      padding: 10,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
          }
    })
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
            <Image style={styles.exit} source={require('../utils/back.png')}/>
            <Image style={styles.cart} source={require('../utils/shoppingCart.png')}/>
            </View>
            <View style={styles.middleContainer}>
                <Image style={styles.icons} source={require('../utils/tree.png')}></Image>
                <Text style={{marginTop:15,fontSize:18, marginBottom:25}}>What do you want to buy today?</Text>
            </View>
            <View style={styles.clickContainer}>
    <Pressable style={styles.clickable}><Text>Shoes</Text><Image style={styles.icons} source={require('../utils/shoe.png')} /></Pressable>
    <Pressable style={styles.clickable}><Text>Shirt</Text><Image style={styles.icons} source={require('../utils/shirt.png')} /></Pressable>
    </View>
    <View style={styles.clickContainer}>
    <Pressable style={styles.clickable}><Text>Food</Text><Image style={styles.icons} source={require('../utils/food.png')} /></Pressable>
    <Pressable style={styles.clickable}><Text>Phone</Text><Image style={styles.icons} source={require('../utils/phone.png')} /></Pressable></View>
    <TextInput style={styles.input} placeholder="I want to buy some snacks..."></TextInput>
        </View>
    )
}

export default Chatbot

