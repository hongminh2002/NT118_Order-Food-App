import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OrderTracking from "./src/component/OrderTracking/TopTab";
import Home from "./src/screen/Home";
import SortReview from "./src/component/Sort/SortReview";
import SortMoney from "./src/component/Sort/SortMoney";
import DetailReview from "./src/component/FoodDetail/DetailReview";
import FoodDetail from "./src/screen/FoodDetail";
import Sort from "./src/screen/Sort";
import Menu from "./src/screen/Menu";
import Categories from "./src/component/Menu/Categories";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Voucher from "./src/screen/VoucherScreen/Voucher";
import ChooseSuccessfully from "./src/screen/VoucherScreen/ChooseSuccessfully";
import VoucherDescription from "./src/screen/VoucherScreen/VoucherDescription";
import DangNhap from "./src/screen/DangNhap";
import DangKy from "./src/screen/DangKy";
import Account from "./src/screen/Account";
import Cart from "./src/screen/CartScreen/Cart";
import OrderConfirm from "./src/screen/OrderConfirm";
import ReviewDescription from "./src/screen/Rating/ReviewDescription";
import QuenMatKhau from "./src/screen/QuenMatKhau";
import ThongTin from "./src/screen/ThongTin";
import DoiMatKhau from "./src/screen/DoiMatKhau";
import XacThuc from "./src/screen/XacThuc";
import FoodDetail1 from "./src/component/Menu/FoodDetail1";
import Notification from "./src/screen/Notification";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  console.log(Stack);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Trang chủ"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Trang chủ" component={Home} />
        <Stack.Screen name="Sort" component={Sort} />
        <Stack.Screen name="SortReview" component={SortReview} />
        <Stack.Screen name="SortMoney" component={SortMoney} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="DetailReview" component={DetailReview} />
        <Stack.Screen name="ReviewDescription" component={ReviewDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MenuNavigator = () => {
  const Stack = createStackNavigator();
  console.log(Stack);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Thực đơn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Thực đơn" component={Menu} />
        <Stack.Screen name="Danh mục" component={Categories} />
        <Stack.Screen name="Chi tiết sản phẩm" component={FoodDetail1} />
        <Stack.Screen name="Lọc" component={Sort} />
        <Stack.Screen name="Giá tiền" component={SortMoney} />
        <Stack.Screen name="Theo dõi đơn hàng" component={OrderTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const VoucherStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Voucher"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Voucher" component={Voucher} />
        <Stack.Screen
          name="VoucherDescription"
          component={VoucherDescription}
        />
        <Stack.Screen
          name="ChooseSuccessfully"
          component={ChooseSuccessfully}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="OrderConfirm" component={OrderConfirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ProfileStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Account"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="DangNhap" component={DangNhap} />
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="QuenMatKhau" component={QuenMatKhau} />
        <Stack.Screen name="ThongTin" component={ThongTin} />
        <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} />
        <Stack.Screen name="XacThuc" component={XacThuc} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/* const ReviewStack = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='ReviewDescription' component={ReviewDescription} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} */

//   );
// };
/* const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='HomeNavigator' component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
} */

export { HomeNavigator, MenuNavigator, VoucherStack, ProfileStack };
