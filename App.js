import WelcomeScreen from "./App/screens/WelcomeScreen";
import ListDeleteItem from "./App/components/ListDeleteItem";
import RenderDeleteAction from "./App/components/RenderDeleteAction";
import Icon from "./App/components/Icon";
import ListItem from "./App/components/ListItem";
import Screen from "./App/components/Screen";
import MessagesScreen from "./App/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <ListItem
        title="Molindu Achintha"
        subTilte="Developer"
        icon={<Icon name="gmail" />}
      ></ListItem>
      <ListItem
        title="Molindu Achintha"
        icon={<Icon name="gmail"></Icon>}
      ></ListItem>
      <ListItem
        title="Molindu Achintha"
        subTilte="Developer"
        icon={<Icon name="gmail"></Icon>}
      ></ListItem>
    </Screen>

    // <MessagesScreen></MessagesScreen>
  );
}
