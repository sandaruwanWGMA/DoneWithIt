import {StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function ListDeleteItem() {
    return (
        <TouchableWithoutFeedback>
            <View>
                <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={24}
                    color="black"
                    style={styles.deleteIcon}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({});
