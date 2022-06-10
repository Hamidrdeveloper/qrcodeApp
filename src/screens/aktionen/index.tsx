import React from 'react';
import {Image, ScrollView, View, Text,TouchableOpacity} from 'react-native';
import Tilecoupons from '../../assets/image/title5.png';
import ball from '../../assets/image/ball.png';
import perahan from '../../assets/image/perahan.png';
import play from '../../assets/image/play.png';
import ImageMap from '../../assets/image/mapImage.png';
import rubbel from '../../assets/image/rubbel.png';
import Fure from '../../assets/image/fure.png';
import Header from '../../components/header';

export default function AktionenScreen() {
  return (
    <>
      <ScrollView
        style={{backgroundColor: '#fafafa', width: `100%`, height: `100%`}}>
            <Header />
        <View style={{width: `100%`, padding: 20, alignItems: 'center'}}>
          <Image
            source={Tilecoupons}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />
          <Image
            source={ball}
            resizeMode="contain"
            style={{height: 250, width: `100%`}}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#000',
            }}>{`Karamalz® belebt Körper und Geist, bringt Sportler allen Alters und Herkunft zusammen und engagiert sich aktiv im Amateur-Vereinsfußball.`}</Text>
<View style={{height:12}}/>
 <Text
            style={{
              fontSize: 15,
              color: '#000',
              flexShrink: 1 
            }}
            numberOfLines={4} ellipsizeMode='tail'>{`Lorem ipsum dolorsit amet, consetetursadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. Lorem ipsum dolor sit amet, consetetursadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.`}</Text>
           <View style={{height:12}}/>
             <Image
            source={perahan}
            resizeMode="stretch"
            style={{height: 150, width: `100%`}}
          />
          <View style={{height:12}}/>
          <View
                    style={{width: `100%`, backgroundColor: '#ccc', height: 1.2}}
                  />
                        <View style={{height:12}}/>
                    <Image
            source={play}
            resizeMode="contain"
            style={{height: 150, width: `100%`}}
          />
          <View style={{height:12}}/>
 <View style={{flexDirection: 'row', width: `100%`, height: 45}}>
          <TouchableOpacity
            style={{
              width: `48%`,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#f2f2f2',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                <Text style={{color:"#ccc"}}>{"Vereinsmitglieder"}</Text>
            </TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            style={{
              width: `48%`,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#ea3a3c',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                                <Text style={{color:"#fff"}}>{"Rangliste"}</Text>

            </TouchableOpacity>
        </View>
        <Image
            source={ImageMap}
            resizeMode="contain"
            style={{height: 280, width: `100%`}}
          />
            <View style={{width: 10}} />
          <Text
            style={{
              fontSize: 15,
              flexShrink: 1 
            }}
            numberOfLines={4} ellipsizeMode='tail'>{`Lorem ipsum dolorsit amet, consetetursadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua. Lorem ipsum dolor sit amet, consetetursadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.`}</Text>
       
        </View>
        <View style={{width: `100%`, height: 15, backgroundColor: '#2c1404'}} />
        <View style={{width: `100%`, padding: 20, alignItems: 'center'}}>
        <Image
            source={rubbel}
            resizeMode="contain"
            style={{height: 100, width: `100%`}}
          />
          <Image
            source={Fure}
            resizeMode="contain"
            style={{height: 200, width: `100%`}}
          />
        </View>
        <View style={{height:30}}/>
      </ScrollView>
    </>
  );
}
