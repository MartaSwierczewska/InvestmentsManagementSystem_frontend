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
    }

    checkLogin() {
        checkLoginCredentials(this.state.username, this.state.password)
            .then((result) => {
                this.setState({token: result.token});
                alert(this.state.token)
            });

        //         alert(response);
        //         localStorage.setItem('items', JSON.stringify(response))
        //         console.log(response);
        //         if(response.data.code === 200){
        //             console.log("Login successfull");
        //         }
        //         else if(response.data.code === 204){
        //             console.log("Username password do not match");
        //             alert("username password do not match")
        //         }
        //         else {
        //             console.log("Username does not exists");
        //             alert("Username does not exist");
        //         }
        //     }).catch(function (error) {
        //     console.log(error);
        //     if (error.response) {
        //         console.log("Upload error. HTTP error/status code=", error.response.status);
        //     } else {
        //         console.log("Upload error. HTTP error/status code=", error.message);
        //     }
        // });
    }


    render() {
        return (
            <div style={{backgroundImage: `url(${Background})`}}>
                <div className="container-login100">
                    <div className="wrap-login100 ">
				        <span className="login100-form-title pb-3">
					        Account Login
				        </span>
                        <form name="loginForm" className="login100-form" onSubmit={this.checkLogin}>
                            <div className="wrap-input100">
                                <input className="input100" type="text" name="username" placeholder="User name"/>
                            </div>
                            <div className="wrap-input100">
                                <input className="input100" type="password" name="pass" placeholder="Password"/>
                            </div>
                            <div className="container-login100-form-btn py-2">
                                <button href="/houses" className="login100-form-btn" onClick={this.routeChange}>
                                    Login
                                </button>
                                {/*<Link to="/houses">*/}
                                {/*    <button role="link" className="login100-form-btn">Sign up</button>*/}
                                {/*</Link>*/}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}