import { useAuth } from '../contexts/AuthContext.js';

export const isAuth = (Component) => {

    const WrappedComponent = (props) => {
        const { isAuthenticated } = useAuth();
        
        return isAuthenticated
            ? <Component {...props} />
            : null
    }

    return WrappedComponent;
}

