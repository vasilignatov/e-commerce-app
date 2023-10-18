import ErrorPage from '../components/404/404.js';
import { useAuth } from '../contexts/AuthContext.js';

export const isAuth = (Component) => {

    const WrappedComponent = (props) => {
        const { isAuthenticated } = useAuth();

        return isAuthenticated
            ? <Component {...props} />
            : <ErrorPage error={{
                message: 'You are not authorized to cee this page. Pleace login!',
                statusCode: 401
            }}
            />
    }

    return WrappedComponent;
}

