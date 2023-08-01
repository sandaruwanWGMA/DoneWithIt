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
import AppText from "./AppText";

export default function ListItem({
  image,
  title,
  subTilte,
  renderRightAction,
  icon,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightAction}>
        <TouchableHighlight onPress={() => console.log("done")}>
          <View style={styles.listItem}>
            {icon}
            <Image source={image} style={styles.listImg} />
            <View>
              <Text style={styles.title}>{title}</Text>
              {subTilte && 
                <AppText style={styles.subTitle}>{subTilte}</AppText>
              }
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
  },
  listImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: 500,
  },
  subTitle: {
    color: colors.medium,
  },
});
