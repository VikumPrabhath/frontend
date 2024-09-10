import React from 'react';
import styles from './SignUp.module.css';
import email from '../assets/email.jpg';
import password from '../assets/password.jpg';
import eye from '../assets/eye.jpg';
import logo from '../assets/logo.jpg';

function SignUp() {
    return (
        <div className={styles.containerSignup}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.input}>
                <img src={email} alt="Email" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className={styles.input}>
                <img src={password} alt="Password" />
                <input className={styles.password} type="password" placeholder="Password" />
                <img src={eye} alt="Show/Hide Password" />
            </div>
            <div className={styles.input}>
                <img src={password} alt="Password" />
                <input type="password" placeholder="Confirm Password" />
                <img src={eye} alt="Show/Hide Password" />
            </div>
            <button className={styles.loginButton}>Sign Up</button>
            <div className={styles.signup}>
                <span>Already have an account? <a href="/Log In">Login In</a></span>
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

export default SignUp;
