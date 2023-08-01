import WelcomeScreen from "./App/screens/WelcomeScreen";
import RenderDeleteAction from "./App/components/RenderDeleteAction";
import Icon from "./App/components/Icon";
import ListItem from "./App/components/ListItem";
import MessagesScreen from "./App/screens/MessagesScreen";
import AppTextInput from "./App/components/AppTextInput";
import AppText from "./App/components/AppText";
import Screen from "./App/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput
        placeholder="Username"
        iconName="gmail"
      ></AppTextInput>
    </Screen>
  );
}
