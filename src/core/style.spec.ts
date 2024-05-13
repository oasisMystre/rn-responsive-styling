import { makeStyles } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  container: {
    flex: 1,
    background: theme.color.primary,
  },
  pane: {
    width: 56,
    background: theme.color.invert,
  },
}));

const styles = useStyles();
styles.root;
