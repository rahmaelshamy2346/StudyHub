import {
  CheckCircle2,
  Circle,
  ArrowRight,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useStudy } from '../../context/StudyContext';

function TodayTasks() {
  const {
    tasksData,
    setTasksData,
  } = useStudy();

  const visibleTasks = tasksData.slice(0, 4);

  const toggleTask = (taskId) => {
    const updatedTasks = tasksData.map((task) =>
      task.id === taskId
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    setTasksData(updatedTasks);
  };

  return (
    <section className="dashboard-card">
      <div className="dashboard-card-header">
        <div>
          <h2>Today Tasks</h2>

          <p>
            Keep track of your study tasks
          </p>
        </div>

        <Link to="/tasks">
          View All
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="today-tasks-list">
        {visibleTasks.length === 0 ? (
          <div className="empty-tasks">
            <p>No tasks available.</p>
          </div>
        ) : (
          visibleTasks.map((task) => (
            <div
              className={`today-task-item ${
                task.completed ? 'completed' : ''
              }`}
              key={task.id}
            >
              <button
                className="today-task-check"
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? (
                  <CheckCircle2 size={19} />
                ) : (
                  <Circle size={19} />
                )}
              </button>

              <div className="today-task-content">
                <h3>{task.title}</h3>

                <span>
                  {task.subject}
                </span>
              </div>

              <span className="today-task-date">
                {task.dueDate}
              </span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TodayTasks;