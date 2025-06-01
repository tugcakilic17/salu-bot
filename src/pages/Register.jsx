import React from 'react';
import '../styles/register.css';
import { Link } from 'react-router-dom';
import characterImage from '../assets/salubot_character.png';

function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-image">
          <img src={characterImage} alt="SaluBot Karakteri" />
        </div>
        <div className="register-card">
          <h2 className="register-title">Kayıt Ol</h2>
          <form className="register-form">
            <input type="text" placeholder="Ad Soyad" className="register-input" />
            <input type="email" placeholder="E-posta" className="register-input" />
            <input type="password" placeholder="Şifre" className="register-input" />
            <input type="password" placeholder="Şifre Tekrar" className="register-input" />
            <button type="submit" className="register-button">Kayıt Ol</button>
          </form>
          <p className="register-footer">
            Zaten bir hesabın var mı? <Link to="/" className="register-link">Giriş Yap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Register;
