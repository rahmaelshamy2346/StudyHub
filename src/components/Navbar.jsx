import { Bell, Search } from 'lucide-react';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="navbar-actions">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-dot"></span>
        </button>

        <div className="profile-mini">
          <div className="profile-avatar">
            R
          </div>

          <div className="profile-info">
            <span className="profile-name">Rahma</span>
            <span className="profile-role">Student</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;