import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  student,
  subjects,
  tasks,
  exams,
  notes,
  progress,
} from '../data/mockData';

const StudyContext = createContext();

function getStoredData(key, defaultValue) {
  const storedData = localStorage.getItem(key);

  if (storedData) {
    return JSON.parse(storedData);
  }

  return defaultValue;
}

export function StudyProvider({ children }) {
  const [studentData, setStudentData] = useState(
    () => getStoredData('studentData', student)
  );

  const [subjectsData, setSubjectsData] = useState(
    () => getStoredData('subjectsData', subjects)
  );

  const [tasksData, setTasksData] = useState(
    () => getStoredData('tasksData', tasks)
  );

  const [examsData, setExamsData] = useState(
    () => getStoredData('examsData', exams)
  );

  const [notesData, setNotesData] = useState(
    () => getStoredData('notesData', notes)
  );

  const [progressData, setProgressData] = useState(
    () => getStoredData('progressData', progress)
  );

  useEffect(() => {
    localStorage.setItem(
      'studentData',
      JSON.stringify(studentData)
    );
  }, [studentData]);

  useEffect(() => {
    localStorage.setItem(
      'subjectsData',
      JSON.stringify(subjectsData)
    );
  }, [subjectsData]);

  useEffect(() => {
    localStorage.setItem(
      'tasksData',
      JSON.stringify(tasksData)
    );
  }, [tasksData]);

  useEffect(() => {
    localStorage.setItem(
      'examsData',
      JSON.stringify(examsData)
    );
  }, [examsData]);

  useEffect(() => {
    localStorage.setItem(
      'notesData',
      JSON.stringify(notesData)
    );
  }, [notesData]);

  useEffect(() => {
    localStorage.setItem(
      'progressData',
      JSON.stringify(progressData)
    );
  }, [progressData]);

  const studyProgress = useMemo(() => {
    const completedTasks = tasksData.filter(
      (task) => task.completed
    ).length;

    const totalTasks = tasksData.length;

    const taskCompletionPercentage =
      totalTasks > 0
        ? Math.round((completedTasks / totalTasks) * 100)
        : 0;

    const completedSubjects = subjectsData.filter(
      (subject) => subject.progress >= 100
    ).length;

    const averageProgress =
      subjectsData.length > 0
        ? Math.round(
            subjectsData.reduce(
              (total, subject) => total + subject.progress,
              0
            ) / subjectsData.length
          )
        : 0;

    return {
      averageProgress,
      completedTasks,
      totalTasks,
      taskCompletionPercentage,
      completedSubjects,
      totalSubjects: subjectsData.length,
      studyHours: progressData.studyHours,
    };
  }, [subjectsData, tasksData, progressData]);

  return (
    <StudyContext.Provider
      value={{
        studentData,
        setStudentData,

        subjectsData,
        setSubjectsData,

        tasksData,
        setTasksData,

        examsData,
        setExamsData,

        notesData,
        setNotesData,

        progressData,
        setProgressData,

        studyProgress,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}