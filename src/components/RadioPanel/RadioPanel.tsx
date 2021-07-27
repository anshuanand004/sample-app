import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { RadioPanelProps } from '../../interface/Interface';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    typographyhead: {
        float: 'left'
    },
    radiopanel: {
        padding: '5px',
        marginLeft: '3px',
        marginRight: '3px',
        marginTop: '6px',
        float: 'left',
        paddingRight: '0%',
        borderRadius: '12px',
    },
    radiolabel: {
        float: 'left',
        marginTop: '6px',
        marginLeft: '6px'
    },
});

/**
 * This is RadioPanel which handles radio select and data switching 
 * @param param0 
 * @returns 
 */
const RadioPanel: React.FC<RadioPanelProps> = ({ selectEvent, selectedRole }) => {
    const classes = useStyles();

    return (
        <div className="RadioPanel">
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={4}
                    >
                        <Grid item xs={12} >
                            <Typography className={classes.typographyhead} variant="h4">User Types</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.radiopanel} style={{ backgroundColor: (selectedRole === 'Admin') ? '#d6ebf5' : 'white', }}>
                            <Radio
                                checked={selectedRole === 'Admin'}
                                onChange={selectEvent}
                                value="Admin"
                                className="RadioAdmin"
                                name="radio-button-admin"
                                inputProps={{ 'aria-label': 'Admin' }}
                                style={{ float: 'left', }}
                            />
                            <Typography className={classes.radiolabel} variant="h6">Admin</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.radiopanel} style={{ backgroundColor: (selectedRole === 'Manager') ? '#d6ebf5' : 'white', }}>
                            <Radio
                                checked={selectedRole === 'Manager'}
                                onChange={selectEvent}
                                className="RadioManager"
                                value="Manager"
                                name="radio-button-manager"
                                inputProps={{ 'aria-label': 'Manager' }}
                                style={{ float: 'left', }}
                            />
                            <Typography className={classes.radiolabel} variant="h6">Manager</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div >
    );
}



export default RadioPanel;
