import React from 'react';
import styles from './Login.module.css';

import email from '../assets/email.jpg';
import password from '../assets/password.jpg';
import eye from '../assets/eye.jpg';
import logo from '../assets/logo.jpg';
import google from '../assets/google.png';
import phone from '../assets/phone.png';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup'); // Programmatically navigate to the signup page
    };

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.input}>
                <img src={email} alt="Email" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className={styles.input}>
                <img src={password} alt="Password" />
                <input type="password" placeholder="Password" />
                <img src={eye} alt="Show/Hide Password" />
            </div>
            <div className={styles.forgotPassword}>
                <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button className={styles.loginButton}>Log In</button>
            <div className={styles.signup}>
                <span>Don't have an account? <button onClick={handleSignUpClick} className={styles.signUpButton}>Sign Up</button></span> {/* Navigate to signup page */}
            </div>
            <div className={styles.or}>OR</div>
            <div className={styles.socialLogin}>
                <img src={google} alt="Google Login" />
                <img src={phone} alt="Phone Login" />
            </div>
            <div className={styles.terms}>
                <span>
                    By Signing Up/Logging in, You agree to our{' '}
                    <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                </span>
            </div>
        </div>
    );
}

export default Login;
