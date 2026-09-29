import { useParams } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';

function SubjectDetails() {
  const { subjectId } = useParams();
  const { subjectsData } = useStudy();

  const subject = subjectsData.find(
    (item) => item.id === Number(subjectId)
  );

  if (!subject) {
    return <p>Subject not found.</p>;
  }

  return (
    <div>
      <h2>{subject.name}</h2>

      <p>Code: {subject.code}</p>

      <p>Instructor: {subject.instructor}</p>

      <p>Credits: {subject.credits}</p>

      <p>Grade: {subject.grade}</p>

      <p>Progress: {subject.progress}%</p>
    </div>
  );
}

export default SubjectDetails;