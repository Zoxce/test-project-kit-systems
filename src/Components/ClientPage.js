import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2196f3'
        }
    }
});

const useStyles = theme => ({

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
        return (
            <div>
                <h1>Здесь будет лого</h1>
                <h1>Клиенты</h1>
                <Link to='/'>Выйти</Link>
            </div>
        );
    }
}

export default withStyles(useStyles)(ClientPage);