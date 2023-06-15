import React from 'react';
import Dashboard from './DashBoard';
import UserAuthentication from './UserAuthentication';

function LandingPage() {
  return (
    <div className="landing-page-container">
      <UserAuthentication />
      <Dashboard />
    </div>
  );
}

export default LandingPage;
