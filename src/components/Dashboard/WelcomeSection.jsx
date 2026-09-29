import { CalendarDays } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function WelcomeSection() {
  const { studentData } = useStudy();

  return (
    <section className="dashboard-welcome">
      <div>
        <p className="welcome-label">Student Dashboard</p>

        <h1>
          Good morning, {studentData.name} 👋
        </h1>

        <p className="welcome-text">
          Here’s what’s happening with your studies today.
        </p>
      </div>

      <div className="dashboard-date">
        <CalendarDays size={18} />
        <span>September 29, 2026</span>
      </div>
    </section>
  );
}

export default WelcomeSection;