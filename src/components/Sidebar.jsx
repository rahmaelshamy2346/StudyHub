import {
  LayoutDashboard,
  BookOpen,
  CheckSquare,
  FileText,
  BarChart3,
  User,
  Settings,
  GraduationCap,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const navItems = [
    {
      name: 'Dashboard',
      path: '/',
      icon: LayoutDashboard,
    },
    {
      name: 'Subjects',
      path: '/subjects',
      icon: BookOpen,
    },
    {
      name: 'Tasks',
      path: '/tasks',
      icon: CheckSquare,
    },
    {
      name: 'Notes',
      path: '/notes',
      icon: FileText,
    },
    {
      name: 'Progress',
      path: '/progress',
      icon: BarChart3,
    },
  ];

  const bottomItems = [
    {
      name: 'Profile',
      path: '/profile',
      icon: User,
    },
    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <GraduationCap size={22} />
        </div>

        <span>StudyHub</span>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-title">MAIN MENU</p>

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <nav className="sidebar-bottom">
        {bottomItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;