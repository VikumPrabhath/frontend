import React from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.jpg';
import setting from '../assets/settings_image.jpg';
import home from '../assets/home_icon.jpg';
import game from '../assets/game_icon.jpg';
import profile from '../assets/profile_icon.jpg';

function Header() {
    return (
        <div className={styles.navbar}>

            <ul className={styles.leftCorner}>
                <li>
                    <img src={logo} alt="Logo" className={styles.icon}/>
                </li>
                <li>
                    <img src={home} alt="Home Icon" className={styles.icon}/>
                </li>
                <li>
                    <img src={game} alt="Game Icon" className={styles.icon}/>
                </li>
            </ul>

            <ul className={styles.rightCorner}>
                <li>
                    <img src={profile} alt="Profile Icon" className={styles.icon}/>
                </li>
                <li>
                    <img src={setting} alt="Settings Icon" className={styles.icon}/>
                </li>
            </ul>
        </div>
    );
}

export default Header;
