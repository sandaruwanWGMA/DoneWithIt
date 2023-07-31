import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import React from "react";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import colors from "../config/colors";

export default function ListItem({ image, text, data, renderRightAction }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight onPress={()=>console.log("done")}>
          <View style={styles.listItem}>
            <Image source={image} style={styles.listImg} />
            <View>
              <Text style={styles.details}>{text}</Text>
              <Text style={styles.details}>{data}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.light
  },
  listImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  details: {},
});
