export const student = {
  name: 'Rahma',
  major: 'Computer Science',
  semester: 'Second Year',
  gpa: 3.5,
};

export const subjects = [
  {
    id: 1,
    name: 'Data Structures',
    code: 'CS201',
    instructor: 'Dr. Ahmed',
    progress: 75,
    grade: 'A',
    credits: 3,
  },
  {
    id: 2,
    name: 'Database Systems',
    code: 'CS202',
    instructor: 'Dr. Sara',
    progress: 60,
    grade: 'B+',
    credits: 3,
  },
  {
    id: 3,
    name: 'Web Development',
    code: 'CS203',
    instructor: 'Dr. Mohamed',
    progress: 85,
    grade: 'A-',
    credits: 3,
  },
  {
    id: 4,
    name: 'Computer Networks',
    code: 'CS204',
    instructor: 'Dr. Omar',
    progress: 50,
    grade: 'B',
    credits: 3,
  },
];

export const tasks = [
  {
    id: 1,
    title: 'Finish React Assignment',
    subject: 'Web Development',
    dueDate: '2026-10-02',
    completed: false,
  },
  {
    id: 2,
    title: 'Study Data Structures',
    subject: 'Data Structures',
    dueDate: '2026-10-03',
    completed: true,
  },
  {
    id: 3,
    title: 'Database Project',
    subject: 'Database Systems',
    dueDate: '2026-10-05',
    completed: false,
  },
];

export const exams = [
  {
    id: 1,
    subject: 'Data Structures',
    date: '2026-10-10',
    time: '10:00 AM',
  },
  {
    id: 2,
    subject: 'Database Systems',
    date: '2026-10-15',
    time: '12:00 PM',
  },
  {
    id: 3,
    subject: 'Web Development',
    date: '2026-10-20',
    time: '10:00 AM',
  },
];

export const notes = [
  {
    id: 1,
    title: 'React Hooks',
    content: 'Review useState, useEffect and useContext.',
  },
  {
    id: 2,
    title: 'Database Normalization',
    content: 'Review 1NF, 2NF and 3NF.',
  },
];

export const progress = {
  completedTasks: 65,
  studyHours: 24,
  completedSubjects: 2,
  totalSubjects: 4,
};