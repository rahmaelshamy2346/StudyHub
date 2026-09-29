import { TrendingUp } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function StudyProgress() {
  const { progressData } = useStudy();

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>Study Progress</h2>
          <p>Your overall study performance</p>
        </div>

        <div className="progress-header-icon">
          <TrendingUp size={20} />
        </div>
      </div>

      <div className="progress-main">
        <div className="progress-circle">
          <div className="progress-circle-inner">
            <strong>{progressData.completedTasks}%</strong>
            <span>Completed</span>
          </div>
        </div>

        <div className="progress-info">
          <div className="progress-info-item">
            <span className="progress-dot blue"></span>

            <div>
              <strong>{progressData.studyHours} hrs</strong>
              <span>Study hours</span>
            </div>
          </div>

          <div className="progress-info-item">
            <span className="progress-dot green"></span>

            <div>
              <strong>
                {progressData.completedSubjects}
              </strong>

              <span>Completed subjects</span>
            </div>
          </div>

          <div className="progress-info-item">
            <span className="progress-dot purple"></span>

            <div>
              <strong>
                {progressData.totalSubjects}
              </strong>

              <span>Total subjects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyProgress;