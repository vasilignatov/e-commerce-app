import { useContext, use } from 'react';
import { AuthPopupXontext } from '../../contexts/AuthPopupContext.js';

import styles from './Auth.module.css';
import './Auth.css';

const Auth = ({
    setIsVisibleHandler
}) => {

    function onCloseModal(e) {
        console.log(e.target.id);
        if (e.target.id == 'auth-overlay') {
            setIsVisibleHandler();
        }
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
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="form px-4 pt-5">
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            placeholder="Email or Phone"
                                        />
                                        <input
                                            type="text"
                                            name=""
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <button className={styles.authBtn}>Login</button>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="form px-4">
                                        <input
                                            type="text"
                                            name="name"
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
                                            type="text"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                        <input
                                            type="text"
                                            name="rePass"
                                            className="form-control"
                                            placeholder="Repeat Password"
                                        />
                                        <button className={styles.authBtn}>Signup</button>
                                    </div>
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