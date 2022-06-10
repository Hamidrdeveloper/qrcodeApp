import React from 'react'
import Tilecoupons from '../../assets/image/tileBare.png'
import {Image,ScrollView,View,Text} from 'react-native';
import fisrt from '../../assets/image/fisrt.png'
import two from '../../assets/image/ticketOne.png'
import tree from '../../assets/image/ticketTwo.png'
import fure from '../../assets/image/ticketTree.png'

import qrCode from '../../assets/image/qrcoder2.png'
import Header from '../../components/header';

export default function CouponsScreen() {
  return (
    <>
     <ScrollView
        style={{backgroundColor: '#fff', width: `100%`, height: `100%`}}>
            <Header />
            <View style={{width: `100%`, padding: 20,alignItems: 'center',}}>
     <Image
            source={Tilecoupons}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />
           <Image
            source={fisrt}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
           <Text>{`* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.`}</Text>
          <Image
            source={two}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
           <Text>{`* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
dolores et ea rebum.`}</Text>
           <Image
            source={tree}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
           <Text>{`* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
dolores et ea rebum.`}</Text>
          <Image
            source={fure}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
           <Text>{`* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
dolores et ea rebum.`}</Text>
        <View style={{height:10}}/>
        <View
        style={{flexDirection: 'row',width:190,height:45,backgroundColor:"#ea3a3c",borderRadius: 20,alignItems: 'center',justifyContent: 'center',}}>
        <Image
            source={qrCode}
            resizeMode="contain"
            style={{height: 30, width: 30}}
          />
          <View style={{width:10}}/>
        <Text style={{color:"#fff"}}>{"QR-Code scannen"}</Text>
        
        </View>
          </View>
          <View style={{height:30}}/>

     </ScrollView>
    </>
  )
}
