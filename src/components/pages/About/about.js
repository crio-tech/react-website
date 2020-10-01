import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../img/bg.jpg';
import ReactPlayer from 'react-player';
import { Container, Row, Col } from 'reactstrap';

import {
  Grid,
  Paper,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color:'white',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    background: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'

  },
  heroContent: {
    padding: theme.spacing(18, 0, 15),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));
export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1} direction="column">
          <Paper variant="outlined" className={classes.paper}>
            <Container className={classes.cardGrid} maxWidth="md">
              <Typography
                variant="h3"
                color="inherit"
                gutterBottom>
               VISIONARY.COACH.
               CATALYST.ENTREPRENEUR.
               ACTIVIST.SEEKER.
              </Typography>
            </Container>
          </Paper>
          <Container className={classes.cardGrid} maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom>
            Meet Gowtham
          </Typography>
          </Container>
          <Grid container item xs={12} spacing={3}>
            <Container>
              <Row>
                <Col>
          <ReactPlayer
            url='https://www.facebook.com/GowthamLifeCoach/videos/1589347867889414'
            width='100%'
            height='50%'
            controls={true}
          />
          </Col>
          <Col>
          <Typography
                variant="body1">
                Gowtham is the founder of Gowhtam's Life Coach Academy. 7 years of training experience with corporates and colleges
                As a coach my responsibility is to bring out the change of an individual
                by himself
                As a coach I am more focused on participants self-discovery
                As a coach I work on the character reformation of each individual
                participant. Passionate trainer with lots of
                experience in NLP and life skills
                training,
                Internationally certified Life Coach
                and NLP Practitioner and Hypnotist
                Creative trainer with a lots of creative
                approach to the participants, certified
                psychotherapist to handle retreat to
                the participants,Company’s mission is to go global, we are taking everyone who join
                our team as participants with us to reach worldwide,
                We are the change in the training profession
          </Typography>
          </Col>
            </Row>
          </Container>
          </Grid>
          <Grid container item xs={12}></Grid>
          <Grid container item xs={12}>
            <Container>
              <Row>
          <Col>
          <Typography
                variant="body1"
                color = "red"
                >
          Why choose Life Coach Gowtham?
          Because Gowtham is raw and unorthodox in NLP and creative training, He can produce results in most energetic
          way, instead of teaching the life skills Gowtham going to stimulate them to discover their strengths and how to build
          strength in their life skills,
           I am going to work on the base structure of their thought process, so that they could strengthen their ability to
          think about themselves
           I am going to give them all their chances to practice NLP and taste the self-satisfaction of their work they do,
           Gowtham is internationally certified Life Coach, NLP Practitioner, Hypnosis practitioner and having six years’
          experience in training field,
           There are many ways to handle life skills training for the participants but NLP is the mother of all the training
          inventions and Gowtham is an researcher in NLP being done with 3 coaches in India,
           Gowtham can give u the world class way to train our participants in an outcome way,
           Gowtham is very effective in communication and his voice can rule out participants mind
          </Typography>
          </Col>
            </Row>
          </Container>
          </Grid>
        </Grid>
      </div>
    </>
  );
}