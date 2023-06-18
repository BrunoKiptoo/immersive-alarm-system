import React from 'react';
import UserAuthentication from './UserAuthentication';
import logo from '../Assets/image-removebg-preview (5).png'; // Assuming your logo file is named logo.png

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
      </header>
      <div className="dashboard-content">
        {/* Add your content here */}
      </div>
      <div className="authentication-container">
        <UserAuthentication />
      </div>
      <footer className="dashboard-footer">
        <p>&copy; 2023 ZoltraAfrica Inc.</p>
      </footer>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .dashboard-logo {
          width: 600px; // Adjust the width of the logo as needed
          height: auto;
        }

        .authentication-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
