import React from 'react';
import styles from './QuizResultPopup.module.css'; // Add any styling you need

function QuizResultPopup() {
    return (
        <div className={styles.popupContainer}>
            <h2>Quiz Results</h2>
            <p>Your quiz has been successfully submitted!</p>
            <p>Thank you for participating!</p>
            {/* You can add more details like score, feedback, etc. */}
        </div>
    );
}

export default QuizResultPopup;
