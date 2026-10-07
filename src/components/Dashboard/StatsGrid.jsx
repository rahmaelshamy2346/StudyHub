import {
  BookOpen,
  CheckSquare,
  TrendingUp,
  Clock,
  Plus,
  Minus,
} from 'lucide-react';

import { useState } from 'react';
import { useStudy } from '../../context/StudyContext';
import StatCard from './StatCard';

function StatsGrid() {
  const {
    subjectsData,
    tasksData,
    progressData,
    setProgressData,
    studyProgress,
  } = useStudy();

  const [showInput, setShowInput] = useState(null);
  const [hours, setHours] = useState('');

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredHours = Number(hours);

    if (!enteredHours || enteredHours <= 0) {
      return;
    }

    setProgressData((previousData) => {
      let newStudyHours;

      if (showInput === 'add') {
        newStudyHours =
          previousData.studyHours + enteredHours;
      } else {
        newStudyHours =
          previousData.studyHours - enteredHours;
      }

      return {
        ...previousData,
        studyHours: Math.max(0, newStudyHours),
      };
    });

    setHours('');
    setShowInput(null);
  };

  const openAddInput = () => {
    setHours('');
    setShowInput('add');
  };

  const openRemoveInput = () => {
    setHours('');
    setShowInput('remove');
  };

  const closeInput = () => {
    setHours('');
    setShowInput(null);
  };

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
        value={`${studyProgress.averageProgress}%`}
        description="Overall progress"
      />

      <div className="study-hours-wrapper">
        <StatCard
          icon={Clock}
          title="Study Hours"
          value={progressData.studyHours}
          description="Hours this semester"
        />

        <div className="study-hours-actions">
          <button
            className="add-hours-btn"
            onClick={openAddInput}
          >
            <Plus size={14} />
            Add Hours
          </button>

          <button
            className="remove-hours-btn"
            onClick={openRemoveInput}
          >
            <Minus size={14} />
            Remove Hours
          </button>
        </div>

        {showInput && (
          <form
            className="add-hours-form"
            onSubmit={handleSubmit}
          >
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={hours}
              onChange={handleHoursChange}
              placeholder="e.g. 2"
              autoFocus
            />

            <button type="submit">
              {showInput === 'add'
                ? 'Add'
                : 'Remove'}
            </button>

            <button
              type="button"
              className="hours-cancel-btn"
              onClick={closeInput}
            >
              ×
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default StatsGrid;