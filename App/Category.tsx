import React from "react";
import { View,Text,Image } from "react-native";

interface ICategory{
    category_id:any;
    category_name:any;
    status:any;
}

export default function Category(props:any) {
    const {img} = props;
    return(
        <View>
            <Image source={{ uri: img}} style={{ width: 120, height: 120, borderRadius: 20, backgroundColor: '#EAEAEA'}} />
        </View>
    );
}