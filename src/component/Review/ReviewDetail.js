import React from "react";
import { ScrollView, View, Image, Text, Dimensions } from "react-native";
import { reviews } from "./ReviewData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ReviewDetail() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ top: 50 }}>
      {reviews.map((review, index) => (
        <View
          key={index}
          style={{
            width: windowWidth - 30,
            marginLeft: 15,
            height: 100,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <CustomerImage review={review} />
            <CustomerName review={review} />
          </View>
          <View style={{ flexDirection: "row", top: 10 }}>
            <StarImage review={review} />
            <Image
              source={require("../../asset/Spot.png")}
              style={{ left: 10, alignSelf: "center" }}
            />
            <ReviewDate review={review} />
          </View>
          <Description review={review} />
        </View>
      ))}
    </ScrollView>
  );
}

const CustomerName = (props) => (
  <View>
    <Text
      style={{
        fontSize: 16,
        fontWeight: "600",
        left: 10,
      }}
    >
      {props.review.customerName}
    </Text>
  </View>
);

const CustomerImage = (props) => (
  <View>
    <Image source={props.review.customerImage} />
  </View>
);

const StarImage = (props) => (
  <View>
    <Image source={props.review.starImage} />
  </View>
);

const ReviewDate = (props) => (
  <View>
    <Text
      style={{
        fontSize: 16,
        fontWeight: "300",
        left: 20,
      }}
    >
      {props.review.date}
    </Text>
  </View>
);

const Description = (props) => (
  <View>
    <Text
      style={{
        fontSize: 16,
        fontWeight: "300",
        top: 10,
      }}
    >
      {props.review.description}
    </Text>
  </View>
);
