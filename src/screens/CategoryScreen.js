import React from "react";
import { FlatList } from "react-native"
import CategoryGrid from "../components/CategoryGrid";
import { CATEGORY } from "../data/appData";



function CategoryScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('Product')
        }
        return (
        <CategoryGrid title={itemData.item.title} imageUrl={itemData.item.imageUrl} onPress={pressHandler}/>
        )
    }
    return (
        <FlatList data={CATEGORY}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={1}
        />
    )
}

export default CategoryScreen;