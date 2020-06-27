import { React, createContext } from 'react';
import Game from './components/Game'

export const AuthContext = createContext();   //context to check if the user is logged in

const App = () => {
    return(
        <AuthContext.Provider>
            <Game/>
        </AuthContext.Provider>
    )
}

export default App;