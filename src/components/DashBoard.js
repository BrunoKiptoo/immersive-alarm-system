import React from 'react';
import UserAuthentication from './UserAuthentication';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Home Alarm System</h1>
      </header>
      <div className="dashboard-content">
        {/* Add your content here */}
      </div>
      <div className="authentication-container">
        <UserAuthentication />
      </div>
      <footer className="dashboard-footer">
        <p>&copy; 2023 CyberSec Inc.</p>
      </footer>

      <style jsx>{`
        .dashboard-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
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
