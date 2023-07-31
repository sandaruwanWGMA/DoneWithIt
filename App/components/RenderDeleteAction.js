import {TouchableWithoutFeedback, View, StyleSheet} from "react-native"
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Constants from "expo-constants";

export default function RenderDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={"trash-can-outline"} color={"white"} size={35}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        backgroundColor: "red"
    },
})