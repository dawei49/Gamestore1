import React from 'react';
import { render } from 'react-dom';
import { Button, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
 
//{uri:file:// width:100,  height:100,scales:{1,2,3}}
export function Profile(props) {
 
 
  const PressHandler = () => {
    props.handler()
  }
 
  return (
    <View style={DetailStyles.container}>
      <View style={DetailStyles.detailContainer}>
        <Text Style={DetailStyles.title}>Welcome Gamer</Text>
        <Text Style={DetailStyles.subtitle}>Friday,Dec 15</Text>
        <Text Style={DetailStyles.description}>Have a good day!!!</Text>
      </View>
      <View style={DetailStyles.bookContainer}>
        <Image style={DetailStyles.image}
          source={require("../assets/zelda.jpg")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/pokemon.jpg")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/MonsterHunter.jpg")}
        />
 
        <View style={DetailStyles.bookDetailContainer}>
          <Text style={DetailStyles
            .borrowerName}>adventure</Text>
          <Text style={DetailStyles.borrowerBio}>Adventure games</Text>
 
        </View>
 
 
      </View>
      <View style={DetailStyles.bookContainer}>
 
 
        <Image style={DetailStyles.image}
          source={require("../assets/supersmashbro.jpg")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/Streetfighter.jpg")}
        />
        <Image style={DetailStyles.image}
          source={require("../assets/Kingoffighter.jpg")}
        />
         <View style={DetailStyles.bookDetailContainer}>
   <Text style={DetailStyles
     .borrowerName}>Fight</Text>
   <Text style={DetailStyles.borrowerBio}>Action games</Text>
 </View>
      </View>
 
      <View style={DetailStyles.bookContainer}>
       <Image style={DetailStyles.image}
         source={require("../assets/animalcrossing.jpg")}
       />
       <Image style={DetailStyles.image}
         source={require("../assets/Mariokart.jpg")}
       />
       <Image style={DetailStyles.image}
         source={require("../assets/Marioparty.jpg")}
       />
        <View style={DetailStyles.bookDetailContainer}>
  <Text style={DetailStyles
    .borrowerName}>Casual </Text>
  <Text style={DetailStyles.borrowerBio}>Casual games</Text>
</View>
     </View>
     
      {/*<Image
        style={{flex:1,
            height:null,resizeMode:"stretch"}}
        source={require('../assets/Englishname.png')}
      />*/}
 
 
 
 
    </View>
 
  )
}
const IMAGE_SIZE = 80;
 
const DetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColours.cerulean,
        justifyContent: 'center',
        alignItems: 'center'
      },
  detailContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black'
 
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4
 
  },
  subtitle: {
 
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12
 
 
  },
  description: {
    fontSize: 13,
  },
 
  bookContainer: {
    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
    backgroundColor: "grey"
  },
  borrowerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500',
  },
  borrowerBio: {
    fontSize: 13,
 
  },
  bookDetailContainer: {
    justifyContent: "center",
 
  }

});