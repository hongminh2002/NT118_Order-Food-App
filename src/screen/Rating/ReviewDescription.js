import React from "react";
import { SafeAreaView } from "react-native";
import Header from "../../component/Header";
import ReviewOverall from "../../component/Review/ReviewOverall";
import Score from "../../component/Review/Score";
import ReviewDetail from "../../component/Review/ReviewDetail";

export default function ReviewDescription() {
  return (
    <SafeAreaView style={{ flexDirection: "column", flex: 1 }}>
      {/* <Header /> */}
      <ReviewOverall />
      <Score />
      <ReviewDetail />
    </SafeAreaView>
  );
}
