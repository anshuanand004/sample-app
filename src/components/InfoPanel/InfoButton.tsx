import { Button, Grid, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { InfoButtonProp } from '../../interface/Interface';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    button: {
        backgroundColor: '#d6ebf5',
        color: 'blue',
        float: 'left',
        fontSize: '15px',
        marginTop: '17px',
        marginRight: '8px'
    },
    pname:{
        fontSize: '19px'
    },
    prole:{
        fontSize: '14px' 
    }
});

/**
 * This is Information Button Component
 * @param props 
 * @returns 
 */
const InfoButton: React.FC<InfoButtonProp> = (props) => {
    const { name, role} = props;
    const classes = useStyles();

    return (
        <div className="InfoButton">
            <TableCell align="justify">
                <Grid container spacing={3} direction="row" justify="center">
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary" className={classes.button }>
                            {name.slice(0, 1)}
                        </Button>
                    </Grid>
                    <Grid item xs={8}>
                        <p className={classes.pname } > {name}</p>
                        <p className={classes.prole } > {role}</p>
                    </Grid>
                </Grid>

            </TableCell >
        </div >
    );
}


export default InfoButton;
