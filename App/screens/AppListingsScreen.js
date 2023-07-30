import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import ListItem from "../components/ListItem";
import Colors from "../config/colors";

const DATA = [
  {
    id: 1,
    image: require("../assets/molindu.jpeg"),
    data: "D1",
    text: "T1",
  },
  {
    id: 2,
    image: require("../assets/molindu.jpeg"),
    data: "D2",
    text: "T2",
  },
  {
    id: 3,
    image: require("../assets/molindu.jpeg"),
    data: "D3",
    text: "T3",
  },
];

function renderItem(props) {
  return (
    <ListItem
      data={props.item.data}
      image={props.item.image}
      text={props.item.text}
    />
  );
}
export default function AppListingsDetailsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (<View style={{
          backgroundColor: Colors.medium,
          width: "100%",
          height: 1
        }} />)}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
    paddingTop: Constants.statusBarHeight,
  },
});
