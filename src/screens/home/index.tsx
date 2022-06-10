import React from 'react';
import Ticket from '../../components/ticket';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';
import Header from '../../components/header';
import First from '../../assets/image/fisrt.png';
import Two from '../../assets/image/two.png';
import Tree from '../../assets/image/tree.png';
import Fure from '../../assets/image/fure.png';
import Five from '../../assets/image/five.png';
import Map from '../../components/map';
import Mark from '../../assets/image/mark.png';
import Location from '../../assets/image/location.png';

export default function HomeScreen() {
  return (
    <>
      <ScrollView
        style={{backgroundColor: '#fff', width: `100%`, height: `100%`}}>
        <Header />
        <View style={{width: `100%`, padding: 20}}>
          <Image
            source={Two}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />

          <Image
            source={First}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
          <Text>{`* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
dolores et ea rebum.`}</Text>
        </View>
        <View style={{width: `100%`, height: 15, backgroundColor: '#2c1404'}} />
        <View style={{width: `100%`, padding: 20}}>
          <Image
            source={Tree}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />

          <Image
            source={Fure}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
        </View>
        <View style={{width: `100%`, height: 15, backgroundColor: '#2c1404'}} />
        <View style={{width: `100%`, padding: 20}}>
          <Image
            source={Five}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />
          <Map />
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={() => {
              return (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      resizeMode={'center'}
                      style={{width: 50, height: 50}}
                      source={Mark}
                    />
                    <View style={{width: 15}} />
                    <View>
                      <Text style={{fontWeight: 'bold', fontSize: 15,color:"#000"}}>
                        {'trinkgut Rademacher'}
                      </Text>
                      <Text style={{color:"#000"}}>{'Musterstr. 28'}</Text>
                      <Text style={{color:"#000"}}>{'48734 Groß Reken'}</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 15,color:"#000"}}>
                        {'02861 902475'}
                      </Text>
                    </View>
                  </View>
                  <View style={{height: 15}} />
                  <View
                    style={{width: `100%`, backgroundColor: '#ccc', height: 1.2}}
                  />
                    <View style={{height: 15}} />
                    <View style={{position:"absolute",right:10,top:10,flexDirection: 'row',justifyContent: 'center',alignItems: 'center',}}>
                    <Text  style={{color:"#000"}}>{"3,8 km entfernt"}</Text>
                    <View style={{width: 5}} />
                    <Image
                      resizeMode={'center'}
                      style={{width: 30, height: 30}}
                      source={Location}
                    />
                    
                        </View>
                </>
              );
            }}
          />
           <View style={{height:110}}/>
        </View>
       

      </ScrollView>
    </>
  );
}
