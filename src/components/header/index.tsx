import React from 'react'
import {View,Image} from "react-native"
import Sample from '../../assets/image/logoImage.png'

export default function Header() {
  return (
    <>
    <View style={{height:100,width:`100%`,backgroundColor:"#2c1404",alignItems: 'center',justifyContent: 'center',}}>
    <Image source={Sample} resizeMode="contain" style={{height:`50%`,width:`100%`}}/>
    
    </View>
    </>
  )
}
