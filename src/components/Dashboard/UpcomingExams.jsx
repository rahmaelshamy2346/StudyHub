import { CalendarDays, Clock } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function UpcomingExams() {
  const { examsData } = useStudy();

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>Upcoming Exams</h2>
          <p>Stay prepared for your exams</p>
        </div>

        <CalendarDays size={20} />
      </div>

      <div className="exams-list">
        {examsData.map((exam) => (
          <div className="exam-item" key={exam.id}>
            <div className="exam-date">
              <span>{exam.date.split('-')[2]}</span>
              <small>OCT</small>
            </div>

            <div className="exam-content">
              <h3>{exam.subject}</h3>

              <p>
                <Clock size={14} />
                {exam.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingExams;