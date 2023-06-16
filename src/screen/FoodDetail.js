import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const tabs = ['Chi tiết', 'Đánh giá'];

const FoodDetail = ({ navigation, route }) => {
  const [selected, setSelected] = useState(0);

  const onScroll = ({ nativeEvent }) => {
    const index = Math.round(nativeEvent.contentOffset.x / (deviceWidth - 20));

    setSelected(index);
  };

  const item = route.params;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>

      {/* <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon style={{ color: 'black', textAlign: 'center' }} name="chevron-left" size={30}></Icon>
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={{ fontWeight: 700, fontSize: 18, color: 'black', }}>Chi tiết sản phẩm</Text>
        </View>
      </View> */}
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.backgroundDetails}>
          <Image source={{ uri: item.image}} style={{ height: 220, width: 220 }} />
        </View>

        <View style={{ marginHorizontal: 15, }}>

          <Text style={{ fontWeight: 700, fontSize: 20, color: '#EA5C2B', marginBottom: 8, }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', width: deviceWidth, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 700, fontSize: 25, marginBottom: 8, }}>{item.price} VNĐ</Text>

            <View style={{ marginRight: 25 }}>
              <TouchableOpacity>
                <MaterialCommunityIcons style={{ backgroundColor: '#EA5C2B', borderRadius: 200, paddingHorizontal: 16, paddingVertical: 14, }} name="cart-plus" size={26} color="white" />
              </TouchableOpacity>
            </View>
          </View>

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

          {/* <View style={{ flexDirection: 'row', marginVertical: 15, }}>
            <Text style={[styles.textCate, { color: '#837878' }]} onPress={() => navigation.navigate('FoodDetail', item)} >Chi tiết</Text>
            <Text style={[styles.textCate, styles.textStand]}>Đánh giá</Text>
          </View>

          <View style={{ height: 260, width: '100%', }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <TouchableOpacity style={styles.contactButton}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', marginHorizontal: 5, }}>Xem thêm</Text>
                <FontAwesome5 name="angle-double-right" size={14} color="white" />
              </TouchableOpacity>
            </View>

          </View> */}
        </View>
        <View style={styles.container}>
        <Text style={[styles.textCate, styles.textStand]}>Chi tiết</Text>
          <ScrollView
            horizontal
            pagingEnabled
            snapToAlignment="center"
            onScroll={onScroll}
            decelerationRate="fast">
            <View style={{ width: deviceWidth - 30, }}>
              <Text style={{ fontSize: 16, color: '#837878', fontWeight: 700, lineHeight: 30, }}>{item.details}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', marginHorizontal: 5, }} onPress={() => navigation.navigate('ReviewStack', route)}>Xem đánh giá</Text>
                  <FontAwesome5 name="angle-double-right" size={14} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </View>
  )
}

export default FoodDetail

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    width: deviceWidth,
    flexDirection: 'row',
    backgroundColor: '#FF7F3F',
    padding: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  title: {
    width: deviceWidth,
    justifyContent: 'center',
    // alignItems: 'center',
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
  },
  container: {
    marginHorizontal: 15,
  },

  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: '#FF7F3F'
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#FF7F3F',
    alignItems: 'center',
  },
  starShine: {
    flexDirection: 'row',
  },
  fiveStar: {
    paddingRight: 5,
  },
  tabs: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: 'white',
  },
  textCate: {
    fontWeight: 700,
    fontSize: 18,
    paddingBottom: 8,
    marginRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStand: {
    color: '#FF7F3F',
    paddingRight: 5,
    borderBottomColor: '#FF7F3F',
    borderBottomWidth: 2,
    width: 80,
  },

  contactButton: {
    borderRadius: 12,
    backgroundColor: '#EA5C2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 115,
    height: 25,
    marginTop: 10,
  },

})