import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Giriş Yap</h2>
        <form className="login-form">
          <input type="email" placeholder="E-posta" className="login-input" />
          <input type="password" placeholder="Şifre" className="login-input" />
          <button type="submit" className="login-button">Giriş Yap</button>
        </form>
        <p className="login-footer">
          Hesabınız yok mu? <Link to="/register" className="login-link">Kayıt Ol</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
