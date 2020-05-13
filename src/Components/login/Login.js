import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from "react";
import {checkLoginCredentials} from "../../utils/APIUtils";

class Login extends React.Component {
    constructor(props){
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
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.checkLogin(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;