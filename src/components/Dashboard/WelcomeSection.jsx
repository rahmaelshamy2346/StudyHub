import { CalendarDays } from "lucide-react";
import { useStudy } from "../../context/StudyContext";

function WelcomeSection() {
  const { studentData } = useStudy();

  return (
    <section className="dashboard-welcome">
      <div>
        <p className="welcome-label">Student Dashboard</p>

        <h1>Hello, {studentData.name}</h1>

        <p className="welcome-text">
          Here’s what’s happening with your studies today.
        </p>
      </div>

      <div className="dashboard-date">
        <CalendarDays size={18} />
        <span>
          {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </section>
  );
}

export default WelcomeSection;
