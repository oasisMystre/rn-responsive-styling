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