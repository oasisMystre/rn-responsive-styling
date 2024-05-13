# React Native Responsive Styling 

* rn-responsive-styling

Create responsive styles for react-native and react-native-web (Not recommended) with minimal re-renders


This library adds support for dynamic styling based on device size (breakpoinrs), ur was build to replace inline dynamic styles for individual components.

## Installation 

```bash
bun add rn-responsive-styling
```


# Usage 

```tsx
// app/_layout.tsx
import {Slot} from "expo-router";
import {ThemeProvider, Theme} from "rn-responsive-styling";

export default function Layout(){
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
```

```tsx
// app/index.tsx
import { View } from "react-native";
import {makeStyles} from "rn-responsive-styling";

export default function IndexScreen(){
	const styles = useStyles();

	return (
		<View style={styles.root}>
			<View style={styles.container} />
			<View style={styles.pane} />
		</View>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		[theme.breakpoints.up("sm")]: {
			flexDirection: "row"
		}
	},
	container: {
		flex: 1,
		background: theme.color.primary,
	},
	pane: {
		width: 56,
		background: theme.color.invert,
	},
}))
```
