import React from 'react';
import { StyleSheet, View } from "react-native";
import  Constants  from 'expo-constants';

const Screen = ({children, style}) => {
    return (
        <View style={[style, {marginTop: Constants.statusBarHeight}]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({})
export default Screen;