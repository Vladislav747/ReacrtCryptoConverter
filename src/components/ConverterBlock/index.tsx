import React from 'react';
//import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// import CurrenciesStore from '../../stores/currenciesStore';
// import ConverterStore from '../../stores/converterStore';
// import { TSelectedCoin } from '../../types';

type IConverterBlock = {
    classes: any;
  };
  

const ConverterBlock = ({classes}:IConverterBlock) => {
    return (
        <Paper className={classes.paper} elevation={3}>

            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.formControl}>
                    <TextField 
                        fullWidth
                        type="number"
                        label="Сумма"/>
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                <Select
                  
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
                <FormControl className={classes.currencyInput}>
                    <TextField 
                        type="number" 
                        label="Сумма" />
                </FormControl>
                <FormControl className={classes.currencyType}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Валюта
                    </InputLabel>
                    <Select>
                    
                        <MenuItem value="USD">USD</MenuItem>
                    
                    </Select>
                </FormControl>
            </div>
          </Paper>
      
    );
  

}


export default ConverterBlock;