import { CalendarDays, Clock } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function UpcomingExams() {
  const { examsData } = useStudy();

  const getMonth = (date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'short',
    }).toUpperCase();
  };

  const getDay = (date) => {
    return new Date(date).getDate();
  };

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>Upcoming Exams</h2>

          <p>Stay prepared for your exams</p>
        </div>

        <div className="exam-header-icon">
          <CalendarDays size={19} />
        </div>
      </div>

      <div className="exams-list">
        {examsData.length === 0 ? (
          <div className="empty-exams">
            <p>No upcoming exams.</p>
          </div>
        ) : (
          examsData.map((exam) => (
            <div
              className="exam-item"
              key={exam.id}
            >
              <div className="exam-date">
                <span>{getDay(exam.date)}</span>

                <small>
                  {getMonth(exam.date)}
                </small>
              </div>

              <div className="exam-content">
                <h3>{exam.subject}</h3>

                <p>
                  <Clock size={13} />
                  {exam.time}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default UpcomingExams;