import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";
import Colors from "../config/colors";
import RenderDeleteAction from "../components/RenderDeleteAction";

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

export default function MessagesScreen() {
  const [messages, setMessages] = useState(DATA);
  const [Refreshing, doRefreshing] = useState(false);

  function handleDelete(message) {
    setMessages(messages.filter((m) => m.id !== message.id));
    console.log(messages);
  }

  function renderItem({ item }) {
    return (
      <ListItem
        subTilte={item.data}
        image={item.image}
        title={item.text}
        renderRightAction={() => (
          <RenderDeleteAction onPress={() => handleDelete(item)} />
        )}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: Colors.medium,
              width: "100%",
              height: 1,
            }}
          />
        )}
        refreshing={false}
        onRefresh={() => {
          setMessages(DATA);
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
