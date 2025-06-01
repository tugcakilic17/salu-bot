import React, { useState } from 'react';
import '../styles/dashboard.css';
import characterImage from '../assets/salubot_character.png';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Background layer */}
      <div className="background-layer"></div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-avatar">
          <img src={characterImage} alt="Salubot Avatar" />
        </div>
        <nav>
          <ul>
            <li>Rapor Takibi</li>
            <li>Yapay Zeka Yardımcısı</li>
            <li>Borç ve Hatırlatma Sistemi</li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <button className="menu-button" onClick={toggleSidebar}>☰</button>
          <h1 className="dashboard-title">Salubot Paneli</h1>
        </div>
        <div className="dashboard-main">
          <p>Hoş geldiniz! Soldaki menüyü kullanarak işlemlerinizi başlatabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
