import React from "react";
import { View } from "react-native";
import ReviewOverall from "../../component/Review/ReviewOverall";
import Score from "../../component/Review/Score";
import ReviewDetail from "../../component/Review/ReviewDetail";

const ReviewDescription = () => {
    return (
        <View style={{flexDirection:'column', flex:1}}>
            <Score />
            <ReviewDetail />
        </View>
    )
}

export default ReviewDescription;
