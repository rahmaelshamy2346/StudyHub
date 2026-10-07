import {
  Settings as SettingsIcon,
  Bell,
  Moon,
  Trash2,
} from 'lucide-react';

import { useEffect, useState } from 'react';

function Settings() {
  const [notifications, setNotifications] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [compactMode, setCompactMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem(
      'darkMode',
      darkMode
    );
  }, [darkMode]);

  const clearData = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear all saved data?'
    );

    if (!confirmed) {
      return;
    }

    localStorage.clear();

    window.location.reload();
  };

  return (
    <div className="settings-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Preferences</p>

          <h1>Settings</h1>

          <p>
            Customize your StudyHub experience.
          </p>
        </div>

        <div className="settings-heading-icon">
          <SettingsIcon size={21} />
        </div>
      </div>

      <div className="settings-sections">
        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon">
              <Bell size={19} />
            </div>

            <div>
              <h2>Notifications</h2>

              <p>
                Manage your study reminders and notifications.
              </p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Study Notifications</strong>

              <span>
                Receive reminders about your tasks and exams.
              </span>
            </div>

            <button
              className={`toggle ${
                notifications ? 'active' : ''
              }`}
              onClick={() =>
                setNotifications(!notifications)
              }
            >
              <span></span>
            </button>
          </div>
        </section>

        <section className="settings-card">
          <div className="settings-card-header">
            <div className="settings-card-icon">
              <Moon size={19} />
            </div>

            <div>
              <h2>Appearance</h2>

              <p>
                Customize how StudyHub looks.
              </p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Dark Mode</strong>

              <span>
                Switch between light and dark appearance.
              </span>
            </div>

            <button
              className={`toggle ${
                darkMode ? 'active' : ''
              }`}
              onClick={() =>
                setDarkMode(!darkMode)
              }
            >
              <span></span>
            </button>
          </div>

         
        </section>

        <section className="settings-card danger-card">
          <div className="settings-card-header">
            <div className="settings-card-icon danger">
              <Trash2 size={19} />
            </div>

            <div>
              <h2>Data Management</h2>

              <p>
                Remove all locally saved StudyHub data.
              </p>
            </div>
          </div>

          <button
            className="clear-data-btn"
            onClick={clearData}
          >
            <Trash2 size={16} />
            Clear All Data
          </button>
        </section>
      </div>
    </div>
  );
}

export default Settings;