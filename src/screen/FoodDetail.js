import { Image, Button, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';

const FoodDetail = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Icon style={{ color: '#FF7F3F' }} name="chevron-left" size={40} onPress={navigation.goBack}></Icon>
        <Text style={{ fontWeight: 700, fontSize: 20, color: '#FF7F3F' }}>{item.name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.backgroundDetails}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>

        <View style={{ marginHorizontal: 15, }}>
          <Text style={{ fontWeight: 700, fontSize: 24, color: '#FF7F3F', marginBottom: 8, }}>{item.name}</Text>
          <Text style={{ fontWeight: 700, fontSize: 30, marginBottom: 8 }}>{item.price}</Text>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View style={styles.starShine}>
              <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
              <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
              <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
              <FontAwesome style={styles.fiveStar} name="star" size={24} color="#ffc107" />
              <FontAwesome style={styles.fiveStar} name="star" size={24} color="#cfcec9" />
            </View>
            <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 16, }}>(17 đánh giá)</Text>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 15, }}>
            <Text style={[styles.textCate, styles.textStand]}>Chi tiết</Text>
            <Text style={[styles.textCate, { color: '#837878' }]} onPress={() => navigation.navigate('DetailReview')}>Đánh giá</Text>
          </View>

          <Text style={{ fontSize: 16, color: '#837878', fontWeight: 700, lineHeight: 30, }}>Phần nhân của chiếc burger đặc biệt bò phô mai được chế biến từ loại thịt bò chất lượng, với độ đảm bảo, tin cậy cao.

            Thịt bò sau khi mua về thì làm sạch, qua các bước sơ chế và cụ thể là xông khói nhằm giữ trọn hương vị, độ ngọt và béo của phần thịt...</Text>
           
        </View> 
 
      </ScrollView>

    </SafeAreaView>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderBottomColor: 'rgba(122, 122, 122, 0.5)',
  },

  backgroundDetails: {
    justifyContent: 'center',
    alignItems: 'center', height: 240,
    backgroundColor: '#feecd1',
    marginHorizontal: 18,
    marginVertical: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 20,
  }
  ,
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#FF7F3F'
  },
  starShine: {
    flexDirection: 'row',
  },
  fiveStar: {
    paddingRight: 5,
  },
  textCate: {
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 8,
    marginRight: 28,
  },
  textStand: {
    color: '#FF7F3F',
    paddingRight: 5,
    borderBottomColor: '#FF7F3F',
    borderBottomWidth: 1
  },
})