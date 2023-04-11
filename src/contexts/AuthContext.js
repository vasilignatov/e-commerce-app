import { useContext, createContext, useState } from 'react';

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
    username: '',
    role: '',
    token: ''
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(initialState);

    const onLogin = (userData) => {
        setUser(userData);
    }

    const onLogout = () => {
        setUser(initialState);
    }

    return (
        <AuthContext.Provider value={{ user, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);
    return authContext;
}

export default AuthProvider;