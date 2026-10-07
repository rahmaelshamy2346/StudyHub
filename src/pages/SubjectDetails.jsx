import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  UserRound,
  Award,
  CheckCircle2,
} from 'lucide-react';

import { Link, useParams } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';

function SubjectDetails() {
  const { subjectId } = useParams();
  const { subjectsData } = useStudy();

  const subject = subjectsData.find(
    (item) => item.id === Number(subjectId)
  );

  if (!subject) {
    return (
      <div className="not-found">
        <h2>Subject not found</h2>

        <Link to="/subjects">
          Back to Subjects
        </Link>
      </div>
    );
  }

  return (
    <div className="subject-details-page">
      <Link
        to="/subjects"
        className="back-link"
      >
        <ArrowLeft size={17} />
        Back to Subjects
      </Link>

      <section className="subject-details-hero">
        <div className="details-hero-left">
          <div className="details-subject-icon">
            <BookOpen size={28} />
          </div>

          <div>
            <span className="details-subject-code">
              {subject.code}
            </span>

            <h1>{subject.name}</h1>

            <p>
              Track your academic progress and subject information.
            </p>
          </div>
        </div>

        <div className="details-grade">
          <span>Grade</span>
          <strong>{subject.grade}</strong>
        </div>
      </section>

      <div className="details-grid">
        <section className="details-progress-card">
          <div className="details-card-header">
            <div>
              <h2>Subject Progress</h2>
              <p>Your current progress in this subject</p>
            </div>

            <span className="details-progress-value">
              {subject.progress}%
            </span>
          </div>

          <div className="large-progress-bar">
            <div
              className="large-progress-fill"
              style={{
                width: `${subject.progress}%`,
              }}
            ></div>
          </div>

          <div className="progress-status">
            <CheckCircle2 size={17} />
            <span>
              You have completed {subject.progress}% of this subject.
            </span>
          </div>
        </section>

        <section className="details-info-card">
          <div className="details-card-header">
            <div>
              <h2>Academic Information</h2>
              <p>Subject details</p>
            </div>
          </div>

          <div className="academic-info-list">
            <div className="academic-info-item">
              <div className="academic-info-icon">
                <UserRound size={18} />
              </div>

              <div>
                <span>Instructor</span>
                <strong>{subject.instructor}</strong>
              </div>
            </div>

            <div className="academic-info-item">
              <div className="academic-info-icon">
                <GraduationCap size={18} />
              </div>

              <div>
                <span>Credits</span>
                <strong>{subject.credits} Credits</strong>
              </div>
            </div>

            <div className="academic-info-item">
              <div className="academic-info-icon">
                <Award size={18} />
              </div>

              <div>
                <span>Current Grade</span>
                <strong>{subject.grade}</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SubjectDetails;