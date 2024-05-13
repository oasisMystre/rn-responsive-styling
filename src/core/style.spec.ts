import { makeStyles } from "./style";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    top: 2,
    left: 3,
    

    [theme.breakpoints.down("sm")]: {
      top: 3,
    
    },
    [theme.breakpoints.eq("md")]: {
      bottom: 3,
      top: 3,
      position: "absolute",
    },
  },
}));

const styles = useStyles();
styles.container

console.log(JSON.stringify(useStyles(), undefined, 2));
