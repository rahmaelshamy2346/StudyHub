import {
  Bell,
  Search,
  CheckSquare,
  CalendarDays,
  FileText,
} from 'lucide-react';

import { useState } from 'react';
import { useStudy } from '../context/StudyContext';

function Navbar() {
  const {
    studentData,
    subjectsData,
    tasksData,
    examsData,
    notesData,
    progressData,
  } = useStudy();

  const [search, setSearch] = useState('');
  const [showNotifications, setShowNotifications] =
    useState(false);

  const searchValue = search.toLowerCase().trim();

  const filteredSubjects = subjectsData.filter((subject) =>
    subject.name.toLowerCase().includes(searchValue) ||
    subject.code.toLowerCase().includes(searchValue)
  );

  const filteredTasks = tasksData.filter((task) =>
    task.title.toLowerCase().includes(searchValue) ||
    task.subject.toLowerCase().includes(searchValue)
  );

  const filteredNotes = notesData.filter((note) =>
    note.title.toLowerCase().includes(searchValue) ||
    note.content.toLowerCase().includes(searchValue)
  );

  const totalResults =
    filteredSubjects.length +
    filteredTasks.length +
    filteredNotes.length;

  const incompleteTasks = tasksData.filter(
    (task) => !task.completed
  );

  return (
    <header className="navbar">
      <div className="navbar-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search anything..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        {searchValue && (
          <div className="search-results">
            {totalResults === 0 ? (
              <div className="search-empty">
                No results found.
              </div>
            ) : (
              <>
                {filteredSubjects.map((subject) => (
                  <div
                    className="search-result"
                    key={`subject-${subject.id}`}
                  >
                    <div className="search-result-icon">
                      <Search size={15} />
                    </div>

                    <div>
                      <strong>{subject.name}</strong>
                      <span>Subject</span>
                    </div>
                  </div>
                ))}

                {filteredTasks.map((task) => (
                  <div
                    className="search-result"
                    key={`task-${task.id}`}
                  >
                    <div className="search-result-icon">
                      <CheckSquare size={15} />
                    </div>

                    <div>
                      <strong>{task.title}</strong>
                      <span>Task</span>
                    </div>
                  </div>
                ))}

                {filteredNotes.map((note) => (
                  <div
                    className="search-result"
                    key={`note-${note.id}`}
                  >
                    <div className="search-result-icon">
                      <FileText size={15} />
                    </div>

                    <div>
                      <strong>{note.title}</strong>
                      <span>Note</span>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      <div className="navbar-actions">
        <div className="notification-wrapper">
          <button
            className="notification-btn"
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
          >
            <Bell size={20} />

            {incompleteTasks.length > 0 && (
              <span className="notification-dot"></span>
            )}
          </button>

          {showNotifications && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <div>
                  <h3>Notifications</h3>

                  <span>
                    {incompleteTasks.length} pending tasks
                  </span>
                </div>
              </div>

              <div className="notification-list">
                {incompleteTasks.length === 0 ? (
                  <div className="notification-empty">
                    <Bell size={22} />

                    <p>
                      You're all caught up!
                    </p>
                  </div>
                ) : (
                  incompleteTasks.slice(0, 4).map((task) => (
                    <div
                      className="notification-item"
                      key={task.id}
                    >
                      <div className="notification-icon task">
                        <CheckSquare size={15} />
                      </div>

                      <div>
                        <strong>{task.title}</strong>

                        <span>
                          Due: {task.dueDate}
                        </span>
                      </div>
                    </div>
                  ))
                )}

                {examsData.slice(0, 2).map((exam) => (
                  <div
                    className="notification-item"
                    key={`exam-${exam.id}`}
                  >
                    <div className="notification-icon exam">
                      <CalendarDays size={15} />
                    </div>

                    <div>
                      <strong>
                        {exam.subject} exam
                      </strong>

                      <span>
                        {exam.date} • {exam.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="profile-mini">
          <div className="profile-avatar">
            {studentData.name
              ? studentData.name.charAt(0).toUpperCase()
              : 'S'}
          </div>

          <div className="profile-info">
            <span>{studentData.name}</span>

            <span className="profile-role">
              {studentData.major || 'Student'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;