

import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Import Axios for making HTTP requests

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your API's login endpoint
            const response = await axios.post('http://localhost:3000/user', {
                email: email,
                password: password,
            });

            // Check the response from the server
            if (response.status === 200) {
                // Successful login, you can handle the user session or redirect
                alert('Login successful');
            } else {
                // Handle login failure, display an error message, etc.
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            // Handle network errors or other issues
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter your Email'
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        nChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Enter your Password'
                    />
                </div>
                <button type="submit">Login</button><br></br>
                <button type="submit">Register Now </button>
            </form>
        </div>
    );
}

export default Login;


