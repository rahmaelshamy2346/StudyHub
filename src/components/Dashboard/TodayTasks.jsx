import { CheckCircle2, Circle } from 'lucide-react';
import { useStudy } from '../../context/StudyContext';

function TodayTasks() {
  const { tasksData } = useStudy();

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>Today's Tasks</h2>
          <p>Keep track of your study tasks</p>
        </div>

        <span className="dashboard-count">
          {tasksData.length}
        </span>
      </div>

      <div className="tasks-list">
        {tasksData.map((task) => (
          <div className="task-item" key={task.id}>
            <div className="task-icon">
              {task.completed ? (
                <CheckCircle2 size={20} />
              ) : (
                <Circle size={20} />
              )}
            </div>

            <div className="task-content">
              <h3 className={task.completed ? 'completed-task' : ''}>
                {task.title}
              </h3>

              <p>{task.subject}</p>
            </div>

            <span className="task-date">
              {task.dueDate}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TodayTasks;