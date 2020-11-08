import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LoginForm from "./Components/LoginForm";

const useStyles = makeStyles((theme) => ({
    mainColor: {
        color: '#E5E5E5',
        height: '100vh',
        width: '100vh'
    },

    loginFormColor: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '5.05%'
    },

    loginFormPosition: {
        position: 'fixed',

    },
}));

export default function LoginPage() {
    const classColor = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classColor.loginFormPosition}>
                <LoginForm/>
            </div>
            <Container className={classColor.mainColor} maxWidth="100%">
                <Typography className={classColor.mainColor} component="div"/>
            </Container>
        </React.Fragment>
    )
}