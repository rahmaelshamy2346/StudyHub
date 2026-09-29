import WelcomeSection from '../components/Dashboard/WelcomeSection';
import StatsGrid from '../components/Dashboard/StatsGrid';
import TodayTasks from '../components/Dashboard/TodayTasks';
import UpcomingExams from '../components/Dashboard/UpcomingExams';
import StudyProgress from '../components/Dashboard/StudyProgress';
import SubjectProgress from '../components/Dashboard/SubjectProgress';

function Dashboard() {
  return (
    <div className="dashboard">
      <WelcomeSection />

      <StatsGrid />

      <div className="dashboard-two-columns">
        <TodayTasks />

        <UpcomingExams />
      </div>

      <div className="dashboard-two-columns">
        <StudyProgress />

        <SubjectProgress />
      </div>
    </div>
  );
}

export default Dashboard;