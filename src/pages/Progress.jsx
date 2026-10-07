import {
  TrendingUp,
  Clock,
  CheckCircle2,
  BookOpen,
  Target,
} from 'lucide-react';

import { useStudy } from '../context/StudyContext';

function Progress() {
  const {
    subjectsData,
    progressData,
    studyProgress,
  } = useStudy();

  return (
    <div className="progress-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Analytics</p>

          <h1>My Progress</h1>

          <p>
            Track your academic performance and study progress.
          </p>
        </div>

        <div className="progress-heading-icon">
          <TrendingUp size={22} />
        </div>
      </div>

      <div className="progress-stats-grid">
        <div className="progress-stat-card">
          <div className="progress-stat-icon blue">
            <TrendingUp size={20} />
          </div>

          <div>
            <span>Overall Progress</span>
            <strong>
              {studyProgress.averageProgress}%
            </strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon green">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <span>Completed Tasks</span>

            <strong>
              {studyProgress.completedTasks}/
              {studyProgress.totalTasks}
            </strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon purple">
            <Clock size={20} />
          </div>

          <div>
            <span>Study Hours</span>

            <strong>
              {progressData.studyHours} hrs
            </strong>
          </div>
        </div>

        <div className="progress-stat-card">
          <div className="progress-stat-icon orange">
            <BookOpen size={20} />
          </div>

          <div>
            <span>Completed Subjects</span>

            <strong>
              {studyProgress.completedSubjects}/
              {studyProgress.totalSubjects}
            </strong>
          </div>
        </div>
      </div>

      <div className="progress-main-grid">
        <section className="progress-overview-card">
          <div className="progress-card-header">
            <div>
              <h2>Overall Study Progress</h2>

              <p>
                Your progress across all subjects
              </p>
            </div>

            <Target size={20} />
          </div>

          <div className="progress-overview-content">
            <div
              className="progress-circle-large"
              style={{
                background: `conic-gradient(
                  #2563eb 0% ${studyProgress.averageProgress}%,
                  #e2e8f0 ${studyProgress.averageProgress}% 100%
                )`,
              }}
            >
              <div className="progress-circle-large-inner">
                <strong>
                  {studyProgress.averageProgress}%
                </strong>

                <span>Overall</span>
              </div>
            </div>

            <div className="progress-overview-info">
              <div>
                <span>Subjects</span>

                <strong>
                  {studyProgress.totalSubjects}
                </strong>
              </div>

              <div>
                <span>Study Hours</span>

                <strong>
                  {studyProgress.studyHours}
                </strong>
              </div>

              <div>
                <span>Task Completion</span>

                <strong>
                  {studyProgress.taskCompletionPercentage}%
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="progress-subjects-card">
          <div className="progress-card-header">
            <div>
              <h2>Subject Progress</h2>

              <p>
                Progress for each subject
              </p>
            </div>
          </div>

          <div className="progress-subject-list">
            {subjectsData.map((subject) => (
              <div
                className="progress-subject-item"
                key={subject.id}
              >
                <div className="progress-subject-top">
                  <div>
                    <h3>{subject.name}</h3>

                    <span>{subject.code}</span>
                  </div>

                  <strong>
                    {subject.progress}%
                  </strong>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${subject.progress}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Progress;

