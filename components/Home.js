import React, {useEffect,useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image, Button,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { ThemeColours } from './ThemeColours';

export function Home ( props ) {
  const navigation = useNavigation()
  const [ borrower, setAuthor ] = useState()
  const [ gamenames, setTitle] = useState()
  const [Date, setDate] = useState()

  useEffect( () => {
   if(!props.auth) {
    navigation.reset({ index: 0, routes: [ {name: 'Signin'} ] })
   }
   console.log( props.user )
  }, [props.auth])

  const handleSubmit =() =>{
    if( gamenames && borrower&& Date ) {
      let game = new Object()
      game.gamenames = gamenames
      game.borrower = borrower
      game.data= Date
      props.add( game)
      .thn((result)=> console.log(result))
      .catch((error)=> console.log(error))
    }
    else{
      console.log('no data', author,title,data)
    }
  }

  return(
    <View style= {HomeStyles.pageContainer}>
      <Text>If you need any help please contact Use with daweihan1996@gmail.com</Text>
      <Text>Borrow game name</Text>
      <TextInput style={HomeStyles.input} onChangeText={val => setTitle(val)} />
      <Text>user</Text>
      <TextInput style={HomeStyles.input} onChangeText={val => setAuthor(val)} />
      <TextInput />
      <Text>Borrow date</Text>
      {/*<TextInput style={HomeStyles.input} onChangeText={ val =>setDate(val) }/>*/}
      <TextInput style={HomeStyles.input} onChangeText={val => setDate(val)} />
      <TouchableOpacity style={HomeStyles.button} onPress={handleSubmit}>
   <Text style={HomeStyles.buttonText}>Borrow game</Text>
 </TouchableOpacity>
      <Button style = {HomeStyles.button}
        title= "Go to profile"

        onPress={()=>navigation.navigate('Profile')}/>
        <Button style = {HomeStyles.button}
        title= "Go to Detail"

        onPress={()=>navigation.navigate('Detail')}/>
            <Image style={HomeStyles.title}
          source={require("../assets/Title.jpg")}
        />
    </View>
  )
}

const HomeStyles = StyleSheet.create({
  
  
  pageContainer: {
    minHeight: 300,
    backgroundColor: 'lightblue',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    color:'red'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
  },
  title: {
    width: 300,
    height:100,
    backgroundColor: "grey"

  }
})