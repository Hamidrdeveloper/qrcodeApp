import React from 'react'
import Header from '../../components/header'
import {View, Image, Text, ScrollView, FlatList} from 'react-native';
import qrImagehash from '../../assets/image/qrImagehash.png';
import imageqr from '../../assets/image/imageqr.png';
import title6 from '../../assets/image/title6.png';




export default function QrCodeScreen() {
  return (
    <>
    <ScrollView
        style={{backgroundColor: '#ea3a3c', width: `100%`, height: `100%`}}>
        <Header />
        <View style={{width: `100%`, padding: 20}}>
        <Image
            source={qrImagehash}
            resizeMode="contain"
            style={{height: 300, width: `100%`}}
          />
          <View style={{height:15}}/>
          <Image
            source={imageqr}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />
          <Image
            source={title6}
            resizeMode="contain"
            style={{height: 150, width: `100%`}}
          />
         </View>
        </ScrollView>
    </>
  )
}
