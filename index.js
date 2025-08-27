import React from 'react';
import './style.css'; // Đảm bảo bạn có file style.css tương ứng

const App = () => {
    return (
        <div>
            <header>
                <img src="logo.png" height="60px" width="120px" alt="Logo" />
                <nav className="navigation">
                    <a href="#">Home</a>
                    <a href="#">Moto</a>
                    <a href="#">Linh kien</a>
                    <a href="#">gio hang</a>
                    <button className="btnLogin-popup">Login</button>
                </nav>
            </header>

            <div className="wrapper">
                <span className="icon-close">
                    <ion-icon name="close"></ion-icon>
                </span>

                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="login-register">
                            <p>Don't have an account? <a href="#" className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>

                <div className="form-box register">
                    <h2>Registration</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" required />
                            <label>Username</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail"></ion-icon>
                            </span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed"></ion-icon>
                            </span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        <div className="login-register">
                            <p>Already have an account? <a href="#" className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>

            <script src="script.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default App;