import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const tabs = ['Chi tiết', 'Đánh giá'];

const DetailReview = ({ navigation, route }) => {
  const [selected, setSelected] = useState(0);

  const onScroll = ({ nativeEvent }) => {
    const index = Math.round(nativeEvent.contentOffset.x / (deviceWidth - 20));

    setSelected(index);
  };

  const item = route.params;

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>

      <View style={styles.header}>
        <Icon style={{ color: '#FF7F3F' }} name="chevron-left" size={40} onPress={navigation.goBack}></Icon>
        <Text style={{ fontWeight: 700, fontSize: 20, color: '#FF7F3F' }}>Chi Tiết Sản Phẩm</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.backgroundDetails}>
          <Image source={item.image} style={{ height: 220, width: 220 }} />
        </View>

        <View style={{ marginHorizontal: 15, }}>

          <Text style={{ fontWeight: 700, fontSize: 24, color: '#FF7F3F', marginBottom: 8, }}>{item.name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontWeight: 700, fontSize: 28, marginBottom: 8, }}>{item.price}</Text>
            <TouchableOpacity>
              <View style={{ marginRight: 25, right: -210, }}>
                <MaterialCommunityIcons style={{ backgroundColor: '#FF7F3F', borderRadius: 200, paddingHorizontal: 16, paddingVertical: 14, }} name="cart-plus" size={26} color="white" />
              </View>
            </TouchableOpacity>
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
        </View>
        <View style={styles.container}>
          <View style={styles.tabs}>
            {tabs.map((e, i) => (
              <Pressable style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => setSelected(i)}>
                <Text
                  style={[
                    styles.textCate,
                    selected == i ? styles.textStand : { color: '#837878' },
                  ]}>
                  {e}
                </Text>
              </Pressable>
            ))}
          </View>
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
                  <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', marginHorizontal: 5, }}>Xem thêm</Text>
                  <FontAwesome5 name="angle-double-right" size={14} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ width: deviceWidth - 30, }}>
              <Text style={{ fontSize: 16, color: '#837878', fontWeight: 700, lineHeight: 30, }}>{item.details}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10, }}>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', marginHorizontal: 5, }}>Xem thêm</Text>
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

export default DetailReview

const deviceWidth = Dimensions.get("window").width;

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
  },

  contactButton: {
    borderRadius: 12,
    backgroundColor: '#EA5C2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 25,
    marginTop: 10,
  },

})