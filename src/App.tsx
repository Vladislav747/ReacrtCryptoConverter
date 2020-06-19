import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem'


const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
 
}));

function App() {

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <div>
              <TextField error id="standard-error" defaultValue="Hello World" />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>Hello!</Paper>
        </Grid>
      </Grid>
 
    </Container>
    
  );
}

export default App;
