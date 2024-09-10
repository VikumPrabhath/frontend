import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnlineQuiz from "./pages/OnlineQuiz.jsx";
import QuizResult from "./pages/QuizResult.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/quiz" element={<OnlineQuiz />} />
                <Route path="/result" element={<QuizResult />} />
            </Routes>
        </Router>
    );
}

export default App;
