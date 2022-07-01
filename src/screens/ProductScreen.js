import React from "react";
import { FlatList } from "react-native"
import { PRODUCT } from "../data/appData";
import ProductGrid from "../components/ProductGrid";



function ProductScreen({navigation}) {

    function renderProductItem(itemData) {
        function pressHandler() {
            navigation.navigate('Details', {
                productId: itemData.item.id,
            })
        }
        return (
        <ProductGrid title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }
    return (
        <FlatList data={PRODUCT}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
        />
    )
}


export default ProductScreen;

