import { Image, Button, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import categories from '../component/Home/Categories';
import Checkbox from '../component/Sort/CheckBox';
import SortReview from '../component/Sort/SortReview';
import SortMoney from '../component/Sort/SortMoney';

const Sort = ({navigation}) => {
  const SortInfo = ({ item }) => {
    return <View style={styles.sortValues}>
      <Image style={{ width: 30, height: 30, resizeMode: 'cover', }}
        source={item.image}
      />
      <Text style={styles.textList}>{item.name}</Text>
      <View style={styles.roundCheck}>
        <Checkbox.RoundCheckBox ></Checkbox.RoundCheckBox>
      </View>
    </View>
  }


  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>

      <View style={styles.header}>
        <Icon name="chevron-left" size={40}></Icon>
        <Text style={{ fontWeight: 700, fontSize: 20 }}>Sắp Xếp</Text>
      </View>

      <ScrollView >
        <View style={{ borderBottomColor: 'rgba(122, 122, 122, 0.5)', borderBottomWidth: 0.75, top: 44, }} ></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 15, }}>
          <View style={{ flexDirection: 'row', borderBottomColor: '#FF7F3F', borderBottomWidth: 1, }}>

            <MaterialCommunityIcons name="tune-vertical-variant" size={20} color="#FF7F3F" />
            <Text style={[styles.textCate, { color: '#FF7F3F' }, { paddingRight: 5 }]}>Sắp xếp theo</Text>
          </View>
          <Text style={styles.textCate}>Danh mục</Text>
          <Text style={styles.textCate}  onPress={() => navigation.navigate('SortReview')}>Đánh giá</Text>
          <Text style={styles.textCate}  onPress={() => navigation.navigate('SortMoney')}>Giá tiền</Text>
        </View>

        <Text style={styles.textSort}>Sắp xếp theo</Text>
        <View style={styles.sortValues}>
          <Image style={{ width: 30, height: 30, resizeMode: 'cover', }}
            source={require('../asset/HomeImage/new.png')}
          />
          <Text style={styles.textList}>Mới nhất</Text>
          <View style={styles.roundCheck}>
            <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
          </View>
        </View>
        <View style={styles.sortValues}>
          <Image style={{ width: 30, height: 30, resizeMode: 'cover', }}
            source={require('../asset/HomeImage/bestseller.png')}
          />
          <Text style={styles.textList}>Bán chạy</Text>
          <View style={styles.roundCheck}>
            <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
          </View>
        </View>
        <View style={styles.sortValues}>
          <Image style={{ width: 30, height: 30, resizeMode: 'cover', }}
            source={require('../asset/HomeImage/shipper.png')}
          />
          <Text style={styles.textList}>Freeship</Text>
          <View style={styles.roundCheck}>
            <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
          </View>
        </View>


        <Text style={styles.textSort}>Danh mục</Text>

        <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{}}
          data={categories}
          renderItem={({ item }) => <SortInfo item={item} />}>
        </FlatList>
        <View style={{flexDirection: 'row' }}>
          <Text style={[styles.textSort, { marginBottom: 40 } ]}>Chỉ hiện khuyến mãi</Text>
          <View style={styles.squareCheck}>
            <Checkbox.SquareCheckBox></Checkbox.SquareCheckBox>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 127, 63, 0.4)'

  },

  sortValues: {
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 35,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.75,
    borderColor: 'rgba(122, 122, 122, 0.5)',

  },

  textSort: {
    color: '#FF7F3F',
    fontWeight: 700,
    marginHorizontal: 35,
    fontSize: 18,
    marginBottom: 5,

  },

  textList: {
    marginLeft: 20,
    fontWeight: 700,

  },
  textCate: {
    fontWeight: 700,
    fontSize: 14,
    paddingBottom: 8,
  },

  roundCheck: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', 
  },

  squareCheck: {
    top: -10,  
    right: 40,
  }
}

);
export default Sort