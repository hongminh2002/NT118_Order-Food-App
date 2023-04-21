import * as React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import Cart from "./src/screen/Cart";
import Voucher from "./src/screen/Voucher";

export default function App() {
  return (
    <SafeAreaView>
      <Voucher />
    </SafeAreaView>
  );
}
