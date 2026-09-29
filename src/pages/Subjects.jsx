import { Link } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';

function Subjects() {
  const { subjectsData } = useStudy();

  return (
    <div>
      <h2>My Subjects</h2>

      <div>
        {subjectsData.map((subject) => (
          <div key={subject.id}>
            <h3>{subject.name}</h3>

            <p>{subject.code}</p>

            <p>Instructor: {subject.instructor}</p>

            <p>Grade: {subject.grade}</p>

            <p>Progress: {subject.progress}%</p>

            <Link to={`/subjects/${subject.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;