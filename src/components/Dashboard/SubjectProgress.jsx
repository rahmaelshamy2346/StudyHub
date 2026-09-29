import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStudy } from '../../context/StudyContext';

function SubjectProgress() {
  const { subjectsData } = useStudy();

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>My Subjects</h2>
          <p>Progress by subject</p>
        </div>

        <Link
          to="/subjects"
          className="view-all-link"
        >
          View all
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="subjects-progress-list">
        {subjectsData.map((subject) => (
          <div
            className="subject-progress-item"
            key={subject.id}
          >
            <div className="subject-progress-top">
              <div>
                <h3>{subject.name}</h3>
                <span>{subject.code}</span>
              </div>

              <strong>{subject.progress}%</strong>
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
  );
}

export default SubjectProgress;