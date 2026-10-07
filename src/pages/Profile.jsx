import {
  UserRound,
  GraduationCap,
  BookOpen,
  Pencil,
  Save,
  X,
} from 'lucide-react';

import { useState } from 'react';
import { useStudy } from '../context/StudyContext';

function Profile() {
  const {
    studentData,
    setStudentData,
  } = useStudy();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: studentData.name,
    major: studentData.major,
    semester: studentData.semester,
    gpa: studentData.gpa,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setFormData({
      name: studentData.name,
      major: studentData.major,
      semester: studentData.semester,
      gpa: studentData.gpa,
    });

    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = (event) => {
    event.preventDefault();

    setStudentData({
      ...studentData,
      name: formData.name,
      major: formData.major,
      semester: formData.semester,
      gpa: Number(formData.gpa),
    });

    setEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Account</p>

          <h1>My Profile</h1>

          <p>
            Manage your personal and academic information.
          </p>
        </div>

        {!editing && (
          <button
            className="edit-profile-btn"
            onClick={handleEdit}
          >
            <Pencil size={17} />
            Edit Profile
          </button>
        )}
      </div>

      <section className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <UserRound size={38} />
          </div>

          <div className="profile-header-info">
            <h2>{studentData.name}</h2>

            <p>{studentData.major}</p>

            <span>
              {studentData.semester}
            </span>
          </div>
        </div>

        {editing ? (
          <form
            className="profile-form"
            onSubmit={handleSave}
          >
            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Major</label>

              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Academic Year</label>

                <input
                  type="text"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>GPA</label>

                <input
                  type="number"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  min="0"
                  max="4"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="profile-form-actions">
              <button
                type="button"
                className="cancel-profile-btn"
                onClick={handleCancel}
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="submit"
                className="save-profile-btn"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-info-grid">
            <div className="profile-info-item">
              <div className="profile-info-icon">
                <UserRound size={18} />
              </div>

              <div>
                <span>Full Name</span>
                <strong>{studentData.name}</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <GraduationCap size={18} />
              </div>

              <div>
                <span>Major</span>
                <strong>{studentData.major}</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <BookOpen size={18} />
              </div>

              <div>
                <span>Academic Year</span>
                <strong>{studentData.semester}</strong>
              </div>
            </div>

            <div className="profile-info-item">
              <div className="profile-info-icon">
                <GraduationCap size={18} />
              </div>

              <div>
                <span>GPA</span>
                <strong>{studentData.gpa}</strong>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Profile;