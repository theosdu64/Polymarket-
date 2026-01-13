import {Button} from "@mui/material";
import './LoginSignUp.css';

export default function LoginSignUpBtn() {
    return (
        <div className="loginSignUpWrapper">
            <Button id="login" variant="text">Log In</Button>
            <Button id="Sign-up" variant="contained">Sign Up</Button>
        </div>
    );
}