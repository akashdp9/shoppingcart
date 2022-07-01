import React from "react";
import { Pressable, View, Text, StyleSheet, ImageBackground } from "react-native";


function CategoryGrid({title, imageUrl, onPress}) {

    return (
        <View style={styles.gridItem}>
         <ImageBackground  source={{uri :imageUrl}} resizeMode="cover" style={styles.image} >
        <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        >
            
            <View style={[styles.innerContainer]}>
               <Text style={styles.title}>{title}</Text> 
            </View>
        </Pressable>
    </ImageBackground>
    </View>
    )
}

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin:16,
        height:150,
        borderRadius: 8,
        elevation: 4,
        overflow:'hidden'
    },
    image: {
        flex: 1,
        justifyContent: "center",
      },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity: 0.5
    },
    innerContainer: {
        flex:1,
        padding: 16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color:'red',
    }
})