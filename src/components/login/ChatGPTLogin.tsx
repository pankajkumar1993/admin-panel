import React from 'react';
import './ChatGPTLogin.scss';

const ChatGPTLogin = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-field">
            <input type="text" placeholder="Username" />
            <span className="icon">👤</span>
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" />
            <span className="icon">🔒</span>
          </div>
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <p className="register">
            Don’t have an account? <a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ChatGPTLogin;
