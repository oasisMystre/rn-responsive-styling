import { makeStyles } from "rn-responsive-styling";
import { Appearance, Button, useColorScheme, View, Text } from "react-native";

export default function IndexScreen() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Button
        title="Set Theme"
        onPress={() =>
          Appearance.setColorScheme(
            Appearance.getColorScheme() === "dark" ? "light" : "dark"
          )
        }
      ></Button>
      <Text style={styles.text}>{JSON.stringify(styles, undefined, 2)}</Text>
    </View>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: 1,
      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.color.primary,
        paddingTop: theme.insets.top,
        paddingHorizontal: 8,
      },
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "indigo",
      },
      [theme.breakpoints.eq("sm")]: {
        backgroundColor: "orange",
      },
    },
    text: {
      color: theme.color.invert,
    },
  };
});
