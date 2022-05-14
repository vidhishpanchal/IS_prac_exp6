import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { allInstructorCoursesAction } from "../actions/courseActions";
import { Link } from "react-router-dom";

// Importing Header
import Header from "./Header";

const homePageTheme = createTheme({
  palette: {
    primary: {
      main: "#809FFF",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#FEFFFF",
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  margin: {
    marginRight: "20px"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  card: {
    width: 250,
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  button: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px"
  },
}));

function MyCoursesInstr({ history, match }) {
  const classes = useStyles();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const allInstructorCourse = useSelector((state) => state.allInstructorCourse);
  const { loading, instructorCourses } = allInstructorCourse;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) dispatch(allInstructorCoursesAction(userInfo.data._id));
  }, [dispatch, history]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={homePageTheme}>
        <Header />
      </ThemeProvider>

      {loading === true ? (
        <div>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >

            <Grid item xs={3}>
              <CircularProgress />
            </Grid>

          </Grid>
        </div>

      ) : (
        <main
        // // className={clsx(classes.content, {
        // //   [classes.contentShift]: open,
        // // })}
        >
          <div className={classes.drawerHeader} />
          <Box textAlign="center">
            <Link to={`/createCourse`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                justifyContent="center"
                className={classes.button}
                startIcon={<AddCircleIcon />}
              >
                Add New Course
              </Button>
            </Link>
          </Box>
          <Grid container spacing={8}>
            {instructorCourses.data.map((course, index) => (
              <Grid item key={index} xs={12} sm={6} md={3} className={classes.margin}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={course.image}
                    title="MERN stack"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {course.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {course.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={`/course/${course._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button size="large" color="primary">
                        Go To Course
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </main>
      )}
    </div>
  );
}
export default MyCoursesInstr;
