import React from 'react';
import {View, Text, TextInput, StyleSheet,ScrollView,TouchableOpacity} from 'react-native';
import CupertinoSwitch from '../../components/CupertinoSwitch';
import Header from '../../components/header';
export default function RegisterScreen({navigation}) {
  return (
    <>
     <ScrollView
        style={{backgroundColor: '#fff', width: `100%`, height: `100%`,}}>
    <Header />
      <View style={{padding: 15,alignItems:'center'}}>
      

      <View style={{height: 2}} />
        <Text style={{fontSize: 18, color: '#d1ac41'}}>{'Registrierung'}</Text>
        <View style={{height: 20}} />
        <View  style={{ width: `100%`}}>

        <View style={{flexDirection: 'row', width: `100%`, height: 45}}>
          <View
            style={{
              width: `48%`,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#ea3a3c',
              alignItems: 'center',
              justifyContent: 'center',
            }}>

                <Text style={{color:"#fff",fontSize:20}}>{"Frau"}</Text>
            </View>
          <View style={{width: 10}} />
          <View
            style={{
              width: `48%`,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#f2f2f2',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                  <Text style={{color:"#d1ac41",fontSize:20}}>{"Herr"}</Text>
            </View>
        </View>
        <View style={{height: 10}} />
        <TextInput
        placeholderTextColor={"#d1ac41"}
        placeholder={"Vorname*"}
          style={{width: `100%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <TextInput
        placeholderTextColor={"#d1ac41"}
                placeholder={"Nachname*"}

          style={{width: `100%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <TextInput
           placeholderTextColor={"#d1ac41"}
              placeholder={"Geburtsdatum*"}
          style={{width: `70%`, padding: 10,borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <View style={{flexDirection: 'row', width: `100%`, height: 40}}>
          <TextInput
          placeholderTextColor={"#d1ac41"}
          placeholder={"Straße*"}
            style={{width: `75%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
          />
          <View style={{width: 10}} />
          <TextInput
           placeholderTextColor={"#d1ac41"}
           placeholder={"Nr.*"}
            style={{width: `20%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
          />
        </View>
        <View style={{height: 10}} />
        <TextInput
        placeholderTextColor={"#d1ac41"}
        placeholder={"Land"}
          style={{width: `100%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <View style={{flexDirection: 'row', width: `100%`, height: 40}}>
          <TextInput
             placeholderTextColor={"#d1ac41"}
             placeholder={"Postleitzahl*"}
            style={{width: `48%`,padding: 10, borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
          />
          <View style={{width: 10}} />
          <TextInput
          placeholderTextColor={"#d1ac41"}
          placeholder={"Ort*"}
            style={{
              width: `48%`,
              height: 40,
              borderRadius: 20,
              padding: 10,
              backgroundColor: '#f2f2f2',
            }}/>
        </View>
        <View style={{height: 10}} />
        <TextInput
        placeholderTextColor={"#d1ac41"}
        placeholder={"E-Mail*"}
          style={{width: `100%`, padding: 10,borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <TextInput
         placeholderTextColor={"#d1ac41"}
         placeholder={"Telefon-Nr.*"}
          style={{width: `100%`, padding: 10,borderRadius: 20, backgroundColor: '#f2f2f2', height: 40}}
        />
        <View style={{height: 10}} />
        <View style={{flexDirection: 'row',width: `100%`,}}>
          <CupertinoSwitch style={styles.cupertinoSwitch1}></CupertinoSwitch>
          <Text>{`Ich akzeptiere hiermit die Allgemeinen
Geschäftsbedingungen (AGB)`}</Text>
        </View>
        <View style={{flexDirection: 'row',width: `100%`,}}>
          <CupertinoSwitch style={styles.cupertinoSwitch1}></CupertinoSwitch>
          <Text>{`Hiermit akzeptiere ich individuelle Vorteils-Angebote
zu erhalten.`}</Text>
        </View>
        </View>
       
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("SignUp")} style={{alignSelf: 'center',alignItems:'center',justifyContent: 'center', borderRadius: 25,bottom:0,backgroundColor:"#785037",width:180,height:40}}>
        <Text style={{color:"#d1ac41"}}>{"JetztAnmelden"}</Text>
        </TouchableOpacity>
        </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  group5: {
    flex: 1,
  },
  group4: {
    width: 375,
    height: 50,
  },
  group3: {
    padding: 15,
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    height: 0,
  },
  registrierung: {
    fontFamily: 'roboto-700',
    color: 'rgba(139,87,42,1)',
    fontSize: 18,
    margin: 0,
  },
  group6: {
    height: 44,
    alignSelf: 'stretch',
    marginTop: 15,
    flexDirection: 'row',
  },
  cupertinoButtonInfo1: {
    height: 44,
    flex: 1,
    borderRadius: 20,
    width: 173,
  },
  cupertinoButtonInfo2: {
    height: 44,
    width: 150,
    borderRadius: 20,
    marginTop: 34,
    backgroundColor: 'rgba(139,87,42,1)',
  },
  cupertinoButtonInfo1Row: {
    height: 44,
    flexDirection: 'row',
    flex: 1,
    marginRight: -1,
  },
  placeholder: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 28,
  },
  placeholder1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 10,
  },
  placeholder2: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 10,
  },
  group7: {
    flexDirection: 'row',
    height: 45,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  placeholder4: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    margin: 0,
    marginRight: 3,
    marginLeft: 3,
    flex: 1,
  },
  placeholder3: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    margin: 0,
    marginRight: 3,
    marginLeft: 3,
    width: 80,
  },
  placeholder5: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 10,
  },
  group9: {
    margin: 0,
    padding: 0,
    alignSelf: 'stretch',
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
  },
  placeholder6: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    flex: 1,
    width: 168,
  },
  placeholder7: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    flex: 1,
    width: 168,
    marginLeft: 5,
  },
  placeholder6Row: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
    marginRight: -1,
    marginLeft: 5,
  },
  placeholder8: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 10,
  },
  placeholder9: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    height: 45,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: 20,
    padding: 14,
    paddingRight: 14,
    paddingLeft: 14,
    marginTop: 10,
  },
  group10: {
    height: 23,
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 10,
  },
  cupertinoSwitch: {
    width: 45,
    height: 23,
    marginRight: 15,
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    flex: 1,
  },
  group11: {
    height: 23,
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  cupertinoSwitch1: {
    width: 45,
    height: 23,
    marginRight: 15,
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: '#121212',
    flex: 1,
  },
});
