import {
  BookOpen,
  CheckSquare,
  TrendingUp,
  Clock,
} from 'lucide-react';

import { useStudy } from '../../context/StudyContext';
import StatCard from './StatCard';

function StatsGrid() {
  const {
    subjectsData,
    tasksData,
    progressData,
  } = useStudy();

  return (
    <div className="stats-grid">
      <StatCard
        icon={BookOpen}
        title="Total Subjects"
        value={subjectsData.length}
        description="This semester"
      />

      <StatCard
        icon={CheckSquare}
        title="Total Tasks"
        value={tasksData.length}
        description="Tasks to manage"
      />

      <StatCard
        icon={TrendingUp}
        title="Study Progress"
        value={`${progressData.completedTasks}%`}
        description="Overall completion"
      />

      <StatCard
        icon={Clock}
        title="Study Hours"
        value={progressData.studyHours}
        description="Hours this semester"
      />
    </div>
  );
}

export default StatsGrid;