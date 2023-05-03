import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './Login'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'
import axios from 'axios'

const Home = ({ navigation }) => {

    const options = {
        method: 'GET',
        url: 'https://shakespeare1.p.rapidapi.com/shakespeare/quote',
        headers: {
          'X-RapidAPI-Key': '6e71062a6dmsh649ab26db553572p16c6e6jsnf125f7e3a681',
          'X-RapidAPI-Host': 'shakespeare1.p.rapidapi.com'
        }
      };

      const fetchPeare = async () => {
        try{
            const response = await axios.request(options);
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
      }

    const signOutHandle = () => {
        signOut(auth)
            .then(cred => {
                // const user = cred.user
                navigation.navigate('Login');
                console.log(`user signed out`)
            })
            .catch((error) => {
                console.log('Error signing out:', error);
              });
    }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={fetchPeare}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Fetch Shakespeare</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={signOutHandle}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})