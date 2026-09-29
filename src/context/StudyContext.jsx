import { createContext, useContext, useState } from 'react';

import {
  student,
  subjects,
  tasks,
  exams,
  notes,
  progress,
} from '../data/mockData';

const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [studentData, setStudentData] = useState(student);
  const [subjectsData, setSubjectsData] = useState(subjects);
  const [tasksData, setTasksData] = useState(tasks);
  const [examsData, setExamsData] = useState(exams);
  const [notesData, setNotesData] = useState(notes);
  const [progressData, setProgressData] = useState(progress);

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
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}