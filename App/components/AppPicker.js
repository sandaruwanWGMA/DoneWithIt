import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";

import { MaterialCommunityIcons } from "expo-vector-icons";

import Screen from "./Screen";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native";
import AppButton from "./AppButton";
import ListItem from "./ListItem";
import PickerItem from "./PickerItem";

export default function AppPicker({ iconName, items, placeholder }) {
  const [modelVisible, setmodelVisible] = useState(false);
  const [category, setCategory] = useState("categories");
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setmodelVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={iconName}
            size={24}
          ></MaterialCommunityIcons>
          <AppText style={styles.text}>{category}</AppText>
          <MaterialCommunityIcons
            style={styles.downArrow}
            name="chevron-down"
            size={24}
          ></MaterialCommunityIcons>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Screen>
          <AppButton
            title="Close"
            color="red"
            bgColor="yellow"
            onPress={() => {
              setmodelVisible(false);
            }}
          ></AppButton>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => { 
                return <PickerItem
                  label={item.label}
                  onPress={() => {
                    setCategory(item.label);
                    setmodelVisible(false);
                  }}
                ></PickerItem>
              
            }}
          ></FlatList>
        </Screen>
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    marginLeft: 10,
    textTransform: "capitalize",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
  },
  downArrow: {
    position: "absolute",
    right: 20,
  },
});
