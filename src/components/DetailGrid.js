import React from "react";
import {  View, Text, Button  } from "react-native";

function DetailGrid({ route }) {
    const proId = route.params.productId; 
    return (
        <View>
            <Text>
                Details
            </Text>
            <Button title="Add To Cart"/>
                
        </View>
    )
}

export default DetailGrid;