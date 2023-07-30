import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import React from "react";

export default function ListItem({ image, text, data }) {
  return (
    <TouchableHighlight>
      <View style={styles.listItem}>
        <Image source={image} style={styles.listImg} />
        <View>
          <Text style={styles.details}>{text}</Text>
          <Text style={styles.details}>{data}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  listImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    
  }
});
