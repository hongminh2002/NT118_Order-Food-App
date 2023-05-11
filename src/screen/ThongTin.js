import React, {Component} from 'react';
import {Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import Constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ThongTin = () => {
  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../asset/Nền1.png')} style={style.background1}/>
      <Image source={require('../asset/Nền3.png')} style={style.background2}/>
      <View style={{height: 51, flexDirection:'row'}}>
        <View style={{flex: 2}}>
          <FontAwesome name="user-circle-o" size={40} color="white" style={{
            left: 20,
          }}/>
        </View>
        <View style={{flex:7, justifyContent:"space-between"}}>
          <Text style={{color: "#fff", fontSize: 18, fontWeight: "bold", paddingTop: 7}}>Nguyễn Văn A</Text>
        </View>
        <View style={{flex:1, paddingTop: 7}}>
          <AntDesign name="close" size={24} color="white" />
        </View>
      </View>
      <View style={{flex:1, justifyContent: 'space-between'}}>
        <View style={{height:450}}>
          <View style={{height:70}}>
            <View style={{height:35, paddingTop:8, paddingLeft: 33}}>
              <Text style={style.nhap}>Tên người dùng :</Text>
            </View>
            <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
            <View style={{height:35, paddingTop:10, paddingLeft: 33,flexDirection:'row'}}>
              <Text style={style.text}>Nguyễn Văn A</Text>
              <MaterialIcons name="edit" size={15} color="black" style={{flex:1}}/>
            </View>
            <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
          </View>
          <View style={{height:70}}>
            <View style={{height:35, paddingTop:8, paddingLeft: 33}}>
              <Text style={style.nhap}>Ngày sinh :</Text>
            </View>
            <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
            <View style={{height:35, paddingTop:10, paddingLeft: 33,flexDirection:'row'}}>
              <Text style={style.text}>00/00/0000</Text>
              <MaterialIcons name="edit" size={15} color="black" style={{flex:1}}/>
            </View>
            <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
          </View>
          <View style={{height:70}}>
            <View style={{height:35, paddingTop:8, paddingLeft: 33}}>
              <Text style={style.nhap}>Số điện thoại :</Text>
            </View>
            <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
            <View style={{height:35, paddingTop:10, paddingLeft: 33,flexDirection:'row'}}>
              <Text style={style.text}>038xxxxxxx</Text>
              <MaterialIcons name="edit" size={15} color="black" style={{flex:1}}/>
            </View>
            <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
          </View>
          <View style={{height:70}}>
            <View style={{height:35, paddingTop:8, paddingLeft: 33}}>
              <Text style={style.nhap}>Email :</Text>
            </View>
            <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
            <View style={{height:35, paddingTop:10, paddingLeft: 33,flexDirection:'row'}}>
              <Text style={style.text}>name@gmail.com</Text>
              <MaterialIcons name="edit" size={15} color="black" style={{flex:1}}/>
            </View>
            <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
          </View>
          <View style={{height:70}}>
            <View style={{height:35, paddingTop:8, paddingLeft: 33}}>
              <Text style={style.nhap}>Địa chỉ :</Text>
            </View>
            <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
            <View style={{height:35, paddingTop:10, paddingLeft: 33,flexDirection:'row'}}>
              <Text style={style.text}>30/4 Cách mạng tháng 8</Text>
              <MaterialIcons name="edit" size={15} color="black" style={{flex:1}}/>
            </View>
            <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
          </View>
        </View>
        <View>
          <TouchableOpacity >
            <Text style={style.save}>Lưu thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* <View style={style.name}>
        <AntDesign name="close" size={24} color="white" style={{
          position:'absolute',
          top: 28,
          left: 345,
        }}/>
        <FontAwesome name="user-circle-o" size={40} color="white" style={{
          position:'absolute',
          top: 18,
          left: 19,
        }}/>
        <Text style={style.pageName}>Nguyễn Văn A</Text>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Tên người dùng:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={{height:70}}>Nguyễn Văn A</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Ngày sinh:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>00/00/0000</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Số điện thoại:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>038xxxxxxx</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Email:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>name@gmail.com</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
      </View>
      <View>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
        <Text style={style.info}>Địa chỉ:</Text>
        <View style={{width: 180, borderWidth: 0.5, borderColor: "#B9B9B9"}}></View>
        <Text style={style.content}>30/4 Cách mạng tháng 8</Text>
        <MaterialIcons name="edit" size={20} color="black" style={{
          position:'absolute',
          bottom: 10,
          left: 345,
        }}/>
        <View style={{width: 400, borderWidth: 1, borderColor: "#B9B9B9"}}></View>
      </View>
      <View>
        <TouchableOpacity >
          <Text style={style.save}>Lưu thay đổi</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
    
  );
};


const style = StyleSheet.create({
  container:{
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  background1: {
    position:'absolute',
    width: '100%',
    height: 450,
  },
  background2: {
    position:'absolute',
    top: 75,
    width:'100%',
  },
  nhap:{
    fontSize: 15,
    color: "#EA5C2B"
  },
  text: {
    fontSize: 12,
    flex:9,
  },
  save: {
    height: 35,
    borderRadius: 12,
    paddingTop: 7,
    width: '80%',
    color: "#fff",
    backgroundColor: "#EA5C2B",
    alignSelf: 'center',
    textAlign: "center",
  },
});
export default ThongTin;
