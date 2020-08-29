import React from 'react';
import { observer, inject } from 'mobx-react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { TCoin, TCoinDiff } from '../../types';

import ConverterStore from '../../stores/converterStore';
import CurrenciesStore from '../../stores/currenciesStore';

type ICryptoTable = {
    classes: any,
    currenciesStore?: CurrenciesStore;
    converterStore?: ConverterStore;
};

const CryptoTable = ({classes}:ICryptoTable) =>{
  const items: any = ["sfd"];
    return (
      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">volume24hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
            {/* {!items.length
              ? 'Загрузка...'
              : ""} */}
          </TableBody>
        </Table>
      </TableContainer>
   
    );
}

export default CryptoTable;