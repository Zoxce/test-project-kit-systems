import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { Redirect } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    }
});

const useStyles = theme => ({
    loginForm: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '5.05%',
        width: '396px',
        height: '376px',
    },
    textField: {
        position: 'absolute',
        height: '76px',
        width: '328px',
        left: '34px',
        top: '117px',
        borderRadius: '0px',
        color: '#007BFF',
    },
    passwordField: {
        height: '76px',
        width: '328px',
        left: '34px',
        top: '201px',
        borderRadius: '0px'
    },
    buttonPosition: {
        position: 'absolute',
        height: '36px',
        width: '99px',
        left: '263px',
        top: '285px',
        textTransform: 'none'
    },
    authorizationText: {
        color: '#3D5170',
        position: 'absolute',
        fontSize: '24px',
        width: '148px',
        height: '29px',
        top: '40px',
        left: '34px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
    }
});

const tokenAuth = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization",
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0ODc5MDY3LCJqdGkiOiJm" +
        "ZjU4NTY2NjM1ZWM0ZDdjODM4YmIwNzZlODQ1OGRkZCIsInVzZXJfaWQiOiJjNmNmNDdmYy0xNjM5LTQxZTEtYWE0Yi1lZmZlZDhkYWYxMWIifQ.DY4o" +
        "78h0Ct--LN_ZCx2jAh2Ea9aNaPf2M3qtHCnqkUc");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const urlCompanies = "http://194.67.90.67/api/v1/companies/";
    fetch(urlCompanies, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error' + error));


    const urlBankDetails = "http://194.67.90.67/api/v1/companies/bank_details/";
    fetch(urlBankDetails, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error2' + error));
};
console.log('tokenAuth' + tokenAuth());

class Login extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token");

        let loggedIn;
        if (token == null) {
            loggedIn = false;
        }

        this.state = {
            username: "",
            password: "",
            loggedIn
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            username: e.state.username,
            password: e.state.password
        });
    }

    submitForm(e) {
        e.preventDefault();
        const { username, password } = this.state;
        if (username === "test@test.task" && password === "class456") {
            localStorage.setItem("token", "kajsdhkjasdalskdls");
            this.setState({
                loggedIn: true
            })
        } else {
            alert("Неправильный логин или пароль");
        }
    }

    render() {

        if (this.state.loggedIn) {
            return <Redirect to="/client"/>
        }

        const { classes } = this.props;

        return (
            <div className='block-paper'>
                <form onSubmit={this.submitForm}>
                    <Paper className={classes.loginForm} square elevation={3}  >
                        <Typography className={classes.authorizationText} variant="h5" component="h5">Авторизация</Typography>
                        <ThemeProvider theme={theme}>
                            <TextField className={classes.textField}
                                       label="Email"
                                       type="text"
                                       name="username"
                                       variant="outlined"
                                       color="primary"
                                       value={this.state.username}
                                       onChange={(e) => this.setState({
                                           [e.target.name]: e.target.value
                                       })}
                                       required
                                       autoFocus
                            />
                            <TextField className={classes.passwordField}
                                       id="outlined-password-input"
                                       label="Password"
                                       type="password"
                                       name="password"
                                       autoComplete="current-password"
                                       variant="outlined"
                                       value={this.state.password}
                                       onChange={(e) => this.setState({
                                           [e.target.name]: e.target.value
                                       })}
                                       required
                            />
                            <div className={classes.buttonPosition}>
                                <Button type="submit" fullWidth variant="contained" color="primary">
                                    Войти
                                </Button>
                            </div>
                        </ThemeProvider>
                    </Paper>
                </form>
            </div>
        );
    }
}

export default withStyles(useStyles)(Login);
