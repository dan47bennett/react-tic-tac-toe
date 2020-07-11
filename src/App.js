import React from 'react';
import Game from './components/Game';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import Header from './components/Header';

const App = () => {
    return (
        <AuthProvider>
            <Header></Header>
            <Router>
                <PrivateRoute exact path="/" component={Game} />
                <Route exact path="/login" component={Login} />
            </Router>
        </AuthProvider>
    );
};

export default App;
