import React from "react";
import {
  Grid,
  Paper,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heroContent: {
    padding: theme.spacing(18, 0, 15),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
const cards = [1, 2, 3];
export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Welcome
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Confidence is the key to success
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={12} sm={6}>
              <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Hi I'm Gowtham!
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </Typography>
              </Container>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Container
                maxWidth="sm"
                component="main"
                className={classes.heroContent}
              >
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="textPrimary"
                  gutterBottom
                >
                  Welcome
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <Container className={classes.cardGrid} maxWidth="md">
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              TESTIMONIALs
            </Typography>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Typography>
                    </CardContent>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          R
                        </Avatar>
                      }
                      title="Jhon Wick"
                      subheader="Designer"
                    />
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </div>
    </>
  );
}
