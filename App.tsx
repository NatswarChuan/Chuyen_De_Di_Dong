import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, TextInput, Button, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import Category from './App/Category';

function Demo() {
  // const [img,setImg] = useState('');
  // useEffect(() => {
  //   axios.get(`http://192.168.1.2:3000/api/image/2/e4611a028c71342a5b083d2cbf59c494`)
  //   .then(res => {
  //     const {data} = res.data;
  //     console.log("data " + data);
  //     setImg(data);
  //     console.log("img "+img);
  //   })
  //   .catch(error => console.log(error));
  // },[])

  return (
    <View>
      {/* {
        img.map(item => 
          <Category post_image={item.post_image}  key={item.post_id} ></Category>
        )
      } */}
      {/* <Category img={img}></Category> */}
      {/* <Image source={{ uri: img}} style={{ width: 120, height: 120, borderRadius: 20, backgroundColor: '#EAEAEA'}} /> */}
    </View>
  );
}


export default function App() {

  const [img, setImg] = useState('');
  useEffect(() => {
      async function abc(){
        await axios.get(`http://192.168.1.2:3000/api/image/17/e4611a028c71342a5b083d2cbf59c494`)
        .then(res => {
          const { data } = res.data;
          setImg(data);
        })
        .catch(error => console.log(error));
      }
      abc();
    console.log("img " + img);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={{ width:200, height:500 }} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  cot: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  hang: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    flex: 1,
  }
});
