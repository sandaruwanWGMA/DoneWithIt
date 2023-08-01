import WelcomeScreen from "./App/screens/WelcomeScreen";
import RenderDeleteAction from "./App/components/RenderDeleteAction";
import Icon from "./App/components/Icon";
import ListItem from "./App/components/ListItem";
import MessagesScreen from "./App/screens/MessagesScreen";
import AppTextInput from "./App/components/AppTextInput";
import AppText from "./App/components/AppText";
import Screen from "./App/components/Screen";
import AppPicker from "./App/components/AppPicker";

export default function App() {
  const items = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Luxturies",
      value: 2,
    },
  ];
  return (
    // <Screen>
    //   <AppTextInput
    //     placeholder="Username"
    //     iconName="gmail"
    //   ></AppTextInput>
    // </Screen>

    <Screen>
      <AppPicker iconName="apps" items={items}></AppPicker>
      <AppTextInput iconName="gmail" placeholder="email"></AppTextInput>
    </Screen>
  );
}


