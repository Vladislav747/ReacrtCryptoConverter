import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => 
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    cryptoInputBox: {
        marginBottom: 20,
        marginTop: 20,
    },
    currencyInput: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    currencyName: {
      marginTop: theme.spacing(2),
    },
    formControl: {
      
    },
    }
));

export default useStyles;