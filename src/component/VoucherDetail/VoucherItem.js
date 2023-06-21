import React, {useState} from "react";
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, Modal } from "react-native";
import ApDungButton from "../VoucherDetail/ApDungButton";
import ApDungBigButton from "../../component/VoucherDetail/ApDungBigButton";

const vouchers = [
  {
    id:'01',
    title : "Giảm 10% đơn từ 200K",
    description : "Giảm tối đa 30K",
    expiredDate: "06/06/2023",
    image : require('../../asset/VoucherImage.png')
  },
  {
    id:'02',
    title : "Giảm 5% đơn từ 150K",
    description : "Giảm tối đa 20K",
    expiredDate: "08/06/2023",
    image : require('../../asset/VoucherImage.png')
  },
  {
    id:'03',
    title : "Miễn phí giao hàng",
    description : "Giảm phí vận chuyển tối đa 15K",
    expiredDate: "20/06/2023",
    image : require('../../asset/FreeshipImage.png')
  },
  {
    id:'04',
    title : "Giảm 20% đơn từ 300K",
    description : "Giảm tối đa 35K",
    expiredDate: "15/06/2023",
    image : require('../../asset/VoucherImage.png')
  }
];

export default function VoucherItem() {
  const [addVoucher,setAddVoucher] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVoucher, setModalVoucher] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  return (
      <ScrollView showsVerticalScrollIndicator = {true}>
          {vouchers.map((voucher) => (
          <TouchableOpacity 
            key={voucher.id} 
            style = {{
                width:"90%",
                height:81,
                backgroundColor:"white",
                borderRadius:12,
                borderBottomWidth:2,
                borderBottomColor:"#D9D9D9",
                marginTop:20,
                alignSelf:'center',
                flexDirection:'row'
            }}
            onPress = {() => {
              setSelectedVoucher(voucher);
              setModalVisible(true);}}
          >
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
              setModalVisible(false);
              }}
            >
              <View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    height:52,
                    backgroundColor:'white',
                    borderBottomColor:'#989292',
                    borderBottomWidth:1.5
                }}>
                    <TouchableOpacity onPress = {() => setModalVisible(false)}>
                      <Image 
                      source={require('../../asset/Exit.png')} 
                      style={{marginLeft:15}} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize:25, 
                        fontWeight:'bold',
                        marginLeft:30}}>
                        {selectedVoucher?.title}
                    </Text>
                </View>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    height:75,
                    backgroundColor:'white',
                    borderBottomColor:'#989292',
                    borderBottomWidth:1.5,
                    justifyContent:'center'
                }}>
                    <View style={{
                        flexDirection:'column',
                        width:'50%',
                        height:60,
                        borderRadius:30,
                        backgroundColor:'#F12626',
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Ngày kết thúc</Text>
                        <Text style={{fontSize:17, color:'white'}}>{selectedVoucher?.expiredDate}</Text>
                    </View>
                </View>
                <ScrollView 
                    style={{
                        marginTop:20, 
                        marginLeft:20, 
                        marginRight:20}}
                    showsHorizontalScrollIndicator='false'
                >
                    <Text style={{fontSize:18, fontWeight:'300'}}>- {selectedVoucher?.description}.</Text>
                    <Text style={{fontSize:18, fontWeight:'300'}}>- Chỉ áp dụng trên giá trị đơn hàng, không áp dụng trên phí giao hàng.</Text>
                    <Text style={{fontSize:18, fontWeight:'300'}}>- Số lượng ưu đãi giới hạn mỗi ngày.</Text>
                    <Text style={{fontSize:18, fontWeight:'300'}}>- Ưu đãi có áp dụng cho đơn hàng lấy tại quán.</Text>
                </ScrollView>
                <ApDungBigButton />
              </View>
            </Modal>
              <VoucherImage voucher={voucher} />
              <VoucherInfo voucher={voucher} />
              <TouchableOpacity 
              style={{flexDirection:'row', alignItems:'center'}}
              onPress={() => setModalVoucher(true)} >
                <Image source={require('../../asset/VectorPlus.png')} style={{alignSelf:'center', justifyContent:'flex-end'}} />
                <Modal 
                  visible={modalVoucher} 
                  animationType="slide" 
                >
                  <View style={{
                      height:'10%',
                      bottom:5,
                      borderRadius:12,
                      backgroundColor:'#EA5C2B',
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center'
                  }}>
                      <View style={{left:10}}>
                          <Text style={{color:'white', fontSize:17, fontWeight:"bold"}}>
                              1 voucher đã được chọn
                          </Text>
                      </View>
                      <TouchableOpacity onPress={() => setModalVoucher(false)}> 
                        <ApDungButton />
                      </TouchableOpacity> 
                  </View>
                </Modal>
              </TouchableOpacity>
          </TouchableOpacity>
          ))}
      </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const VoucherInfo = (props) => (
  <View style={{width: deviceWidth - 175, alignSelf:'center'}}>
    <Text style={{fontSize:18, fontWeight:'600'}}>{props.voucher.title}</Text>
    <Text> {props.voucher.description} </Text>
  </View>
);

const VoucherImage = (props) => (
  <Image source={props.voucher.image} style={{marginRight:20}} /> 
);
