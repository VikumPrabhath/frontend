import React from "react";
import styles from "./Question.module.css";

function Question({ currentQuestion, onNext, onPrev }) {
    return (
        <div className={styles.container}>
            <button className={styles.prev} onClick={onPrev} disabled={currentQuestion === 1}>
                p
            </button>
            <div className={styles.quezBox}>
                {/* Display the current question */}
                Question {currentQuestion}
            </div>
            <button className={styles.next} onClick={onNext}>
                >
            </button>
        </div>
    );
}

export default Question;
