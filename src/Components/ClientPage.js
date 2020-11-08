import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Logo from "../images/bizkit.png";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    }
});

const useStyles = theme => ({
    logo: {
        width: '169px',
        height: '52px',
        position: 'absolute',
        left: '35px',
        right: '85.83%',
        top: '24px',
        bottom: '91.56%'
    },
    paperBar: {
        width: '250px',
        position: 'absolute',
        left: '0%',
        right: '82.64%',
        top: '-0.56%',
        bottom: "-0.11%",
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    clientText: {
        fontSize: '14px',
        lineHeight: '24px',
        fontFamily: 'Roboto',
        fontWeight: '500'
    },
    surfaceBar: {
        position: 'absolute',
        left: '250px',
        right: '0%',
        bottom: '91.56%',
        background: '#FFFFFF',
        width: '1652px',
        height: '87px',
        top: '-11px'
    },
    secondClientsText: {
        position: 'absolute',
        fontSize: '24px',
        fontFamily: 'Roboto',
        lineHeight: '28px',
        letterSpacing: '0.15px',
        color: '#3D5170',
        weight: '500',
        left: '72px',
        right: '16px',
    },
    addButton: {
        position: 'absolute',
        left: '81.6%',
        right: '6.81%',
        top: '17.86%',
        bottom: '17.86%'
    },
    icons: {
        position: 'absolute',
        height: '56px',
        left: '0%',
        right: '0%',
        top: 'calc(50% - 56px/2 + 4.5px)'
    }
});

class ClientPage extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }
        this.state = {
            loggedIn
        };
        localStorage.removeItem("token")
    }

    render() {


        if (this.state.loggedIn === false) {
            return <Redirect to='/'/>
        }

        const { classes } = this.props;

        return (
            <div>
                <div className={classes.surfaceBar}>
                    <Paper>
                        <div className={classes.icons}>
                            <ThemeProvider theme={theme}>
                                <h1 className={classes.secondClientsText}>Клиенты</h1>
                                <Button className={classes.addButton} variant='contained' color='primary'>Добавить</Button>
                            </ThemeProvider>
                        </div>
                    </Paper>
                </div>

                <div className={classes.paperBar}>
                    <Paper elevation={0}>
                        <div className={classes.logo}>
                            <img src={Logo}/>
                            <h1 className={classes.clientText}>Клиенты</h1>
                            <Link to='/'><h1 className={classes.clientText}>Выйти</h1></Link>
                        </div>
                    </Paper>
                </div>


            </div>
        );
    }
}

export default withStyles(useStyles)(ClientPage);