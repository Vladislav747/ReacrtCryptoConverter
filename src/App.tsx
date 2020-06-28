import React from 'react';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


import { CryptoTable, ConverterBlock } from './components';
import useStyles from './styles';



function App() {

  const classes: any = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={8}>
          <CryptoTable classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
          

          
        </Grid>
      </Grid>
 
    </Container>
    
  );
}

export default App;
