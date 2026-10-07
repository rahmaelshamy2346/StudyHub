import {
  CheckCircle2,
  Circle,
  Trash2,
  Plus,
} from 'lucide-react';

import { useState } from 'react';
import { useStudy } from '../context/StudyContext';

function Tasks() {
  const {
    tasksData,
    setTasksData,
    subjectsData,
  } = useStudy();

  const [newTask, setNewTask] = useState({
    title: '',
    subject: '',
    dueDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewTask((previousTask) => ({
      ...previousTask,
      [name]: value,
    }));
  };

  const addTask = (event) => {
    event.preventDefault();

    if (
      newTask.title.trim() === '' ||
      newTask.subject === '' ||
      newTask.dueDate === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask.title,
      subject: newTask.subject,
      dueDate: newTask.dueDate,
      completed: false,
    };

    setTasksData((previousTasks) => [
      ...previousTasks,
      task,
    ]);

    setNewTask({
      title: '',
      subject: '',
      dueDate: '',
    });
  };

  const toggleTask = (taskId) => {
    setTasksData((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasksData((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  };

  return (
    <div className="tasks-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Study Management</p>

          <h1>My Tasks</h1>

          <p>
            Manage your study tasks and keep track of what you need to do.
          </p>
        </div>
      </div>

      <section className="add-task-card">
        <div className="tasks-section-header">
          <div>
            <h2>Add New Task</h2>

            <p>
              Create a task for your study plan.
            </p>
          </div>

        </div>

        <form
          className="task-form"
          onSubmit={addTask}
        >
          <div className="form-group">
            <label>Task Title</label>

            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={handleChange}
              placeholder="e.g. Study React Hooks"
            />
          </div>

          <div className="form-group">
            <label>Subject</label>

            <select
              name="subject"
              value={newTask.subject}
              onChange={handleChange}
            >
              <option value="">
                Select subject
              </option>

              {subjectsData.map((subject) => (
                <option
                  key={subject.id}
                  value={subject.name}
                >
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>

            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="add-task-btn"
          >
            <Plus size={17} />
            Add Task
          </button>
        </form>
      </section>

      <section className="tasks-list-card">
        <div className="tasks-section-header">
          <div>
            <h2>All Tasks</h2>

            <p>
              {tasksData.length} tasks in total
            </p>
          </div>
        </div>

        <div className="tasks-list">
          {tasksData.length === 0 ? (
            <div className="empty-tasks">
              <p>No tasks yet.</p>
            </div>
          ) : (
            tasksData.map((task) => (
              <div
                className={`task-item ${
                  task.completed ? 'completed' : ''
                }`}
                key={task.id}
              >
                <button
                  type="button"
                  className="task-check-btn"
                  onClick={() => toggleTask(task.id)}
                >
                  {task.completed ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <Circle size={22} />
                  )}
                </button>

                <div className="task-content">
                  <h3>{task.title}</h3>

                  <div className="task-meta">
                    <span>{task.subject}</span>

                    <span>
                      Due: {task.dueDate}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="delete-task-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Tasks;