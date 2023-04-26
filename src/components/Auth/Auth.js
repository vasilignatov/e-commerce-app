import styles from './Auth.module.css';
import './Auth.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.js'
import * as authService from '../../services/authService.js';

const Auth = ({
    setIsVisibleHandler
}) => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { onLogin } = useAuth();

    function onCloseModal(e) {
        if (e.target.id === 'auth-overlay') {
            setIsVisibleHandler();
        }
    }

    function onSubmitLogin(e) {
        e.preventDefault(e);

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        if (email === '' || password === '') {
            return setError({ message: 'All fields are required!' });
        }

        authService.login(email, password)
            .then((userData) => {
                if (userData.type == 'error') {
                    throw userData;
                }
                setError(null);
                onLogin(userData);
                setIsVisibleHandler();
                navigate('/')
            })
            .catch(err => {
                console.log('Error: ', err);
                setError({ message: err.message });
            });
    }

    function onSubmitRegister(e) {
        e.preventDefault(e);

        const { username, password, email, rePass } = Object.fromEntries(new FormData(e.currentTarget));

        if (username === '' || password === '' || email === '' || rePass === '') {
            return setError({ message: 'All fields are required!' });
        } else if (username.length < 3 || password.length < 3) {
            return setError({ message: 'Username or password must be at least 3 characters long!' });
        } else if (password !== rePass) {
            return setError({ message: 'Passwords missmatch!' });
        } else if (email.length < 5 && !email.includes('@')) {
            return setError({ message: 'Invalid email adress!' });
        }


        authService.register(email, username, password)
            .then(userData => {
                if (userData.type == 'error') {
                    throw userData;
                }
                setError(null);
                onLogin(userData);
                navigate('/');
                setIsVisibleHandler();
            })
            .catch(err => {
                console.log('Error: ', err);
                setError({ message: err.message });
            });
    }

    return (
        <>
            <div className={styles.auth_overlay} onClick={onCloseModal} id='auth-overlay'>
                <div className={styles.center} >
                    <div className="d-flex justify-content-center align-items-center" >
                        <div className="card">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item text-center">
                                    <a
                                        className="nav-link active btl"
                                        id="pills-home-tab"
                                        data-toggle="pill"
                                        href="#pills-home"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item text-center">
                                    <a
                                        className="nav-link btr"
                                        id="pills-profile-tab"
                                        data-toggle="pill"
                                        href="#pills-profile"
                                        role="tab"
                                        aria-controls="pills-profile"
                                        aria-selected="false"
                                    >
                                        Signup
                                    </a>
                                </li>
                            </ul>

                            {
                                error
                                    ? <p className={styles.error_msg}>{error.message}</p>
                                    : ''
                            }

                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <form className="form px-4 pt-4" onSubmit={onSubmitLogin}>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <button type='submit' className={styles.authBtn}>Login</button>
                                    </form>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <form className="form px-4" onSubmit={onSubmitRegister}>
                                        <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            placeholder="Name"
                                        />
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <input
                                            type="password"
                                            name="rePass"
                                            className="form-control"
                                            placeholder="Repeat Password"
                                        />
                                        <button type="submit" className={styles.authBtn}>Signup</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;