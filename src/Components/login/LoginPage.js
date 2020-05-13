import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginPage.css';
import Background from './bg-01.jpg';
import {checkLoginCredentials} from "../../utils/APIUtils";
import Link from "@material-ui/core/Link";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            token:''
        };
        this.checkLogin = this.checkLogin.bind(this);
        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
    }

    checkLogin() {
        checkLoginCredentials(this.state.username, this.state.password)
            .then((result) => {
                this.setState({token: result.token});
                alert(this.state.token);
                localStorage.setItem('token', this.state.token)
            }).catch(function (error) {
            console.log(error);
            if (error.response) {
                console.log("Upload error. HTTP error/status code=", error.response.status);
            } else {
                console.log("Upload error. HTTP error/status code=", error.message);
            }
        });
        window.open('http://localhost:3000/houses', '_self')
    }

    handleUsernameInputChange(value) {
        this.setState({
            username: value
        })
    }

    handlePasswordInputChange(value) {
        this.setState({
            password: value
        })
    }

    componentDidMount() {
        localStorage.setItem('token', undefined);
    }

    render() {
        return (
            <div style={{backgroundImage: `url(${Background})`}}>
                <div className="container-login100">
                    <div className="wrap-login100 ">
				        <span className="login100-form-title pb-3">
					        Account Login
				        </span>
                        <form action="http://localhost:3000/houses" method={'get'} name="loginForm" className="login100-form">
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="username" placeholder="User name" onChange = {(event) => this.handleUsernameInputChange(event.target.value)}/>
                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" placeholder="Password" onChange = {(event) => this.handlePasswordInputChange(event.target.value)}/>
                            </div>
                            <div className="container-login100-form-btn py-2">
                                <button type="button" className="login100-form-btn" onClick={this.checkLogin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}