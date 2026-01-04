
import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AcademicAssistant from './components/AcademicAssistant';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="antialiased">
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      
      {/* The AI assistant is always available, even on login screen, to help candidates */}
      <AcademicAssistant />
    </div>
  );
};

export default App;
