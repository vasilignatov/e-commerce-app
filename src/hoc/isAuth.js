import { useAuth } from '../contexts/AuthContext.js';

export const isAuth = (Component) => {

    const WrappedComponent = (props) => {
        const { isAuthenticated } = useAuth();
        console.log(isAuthenticated);
        return isAuthenticated
            ? <Component {...props} />
            : null
    }

    return WrappedComponent;
}

