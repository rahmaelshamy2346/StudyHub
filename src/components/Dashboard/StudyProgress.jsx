import { TrendingUp } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function StudyProgress() {
  const { studyProgress } = useStudy();

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
        <div
          className="progress-circle"
          style={{
            background: `conic-gradient(
              #2563eb 0% ${studyProgress.averageProgress}%,
              #e2e8f0 ${studyProgress.averageProgress}% 100%
            )`,
          }}
        >
          <div className="progress-circle-inner">
            <strong>
              {studyProgress.averageProgress}%
            </strong>

            <span>Overall</span>
          </div>
        </div>

        <div className="progress-info">
          <div className="progress-info-item">
            <span className="progress-dot blue"></span>

            <div>
              <strong>
                {studyProgress.studyHours} hrs
              </strong>

              <span>Study hours</span>
            </div>
          </div>

          <div className="progress-info-item">
            <span className="progress-dot green"></span>

            <div>
              <strong>
                {studyProgress.completedSubjects}
              </strong>

              <span>Completed subjects</span>
            </div>
          </div>

          <div className="progress-info-item">
            <span className="progress-dot purple"></span>

            <div>
              <strong>
                {studyProgress.totalSubjects}
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
