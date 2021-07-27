import { Card, CardContent, Grid, Table, TableBody, TableContainer, TableRow, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import InfoButton from './InfoButton';
import { InfoPanelProp } from '../../interface/Interface';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
});

/**
 * This is Information Panel component
 * @param param0 
 * @returns 
 */
const InfoPanel: React.FC<InfoPanelProp> = ({ title, dataList, ...rest }) => {

    const classes = useStyles();

    if (dataList !== null && dataList !== undefined && dataList.length > 0) {
        return (
            <div className="InfoPanel">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            spacing={2}
                            className="Info-Grid"
                        >
                            <Grid item xs={12}>
                                <Typography style={{ float: 'left' }} variant="h4">{title}</Typography>
                            </Grid>
                            <Grid item xs={12} >
                                <TableContainer>
                                    <Table className="Info-Table">
                                        <TableBody>
                                            {
                                                dataList.map((row) => {
                                                    return (
                                                        <TableRow
                                                            hover
                                                            tabIndex={-1}
                                                            key={row.id}
                                                        >
                                                            <InfoButton name={row.name} role={row.role}></InfoButton>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
    else {
        return (
            <div>
                <Typography variant="h4">Data Fetch In Progress........</Typography>
            </div>
        );
    }
}



export default InfoPanel;
