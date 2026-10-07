import {
  ArrowRight,
  BookOpen,
  UserRound,
  Plus,
  X,
  Pencil,
  Trash2,
} from 'lucide-react';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStudy } from '../context/StudyContext';

function Subjects() {
  const { subjectsData, setSubjectsData } = useStudy();

  const [showModal, setShowModal] = useState(false);
  const [editingSubject, setEditingSubject] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    code: '',
    instructor: '',
    grade: '',
    credits: '',
    progress: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openAddModal = () => {
    setEditingSubject(null);

    setFormData({
      name: '',
      code: '',
      instructor: '',
      grade: '',
      credits: '',
      progress: '',
    });

    setShowModal(true);
  };

  const openEditModal = (subject) => {
    setEditingSubject(subject);

    setFormData({
      name: subject.name,
      code: subject.code,
      instructor: subject.instructor,
      grade: subject.grade,
      credits: subject.credits,
      progress: subject.progress,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingSubject(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingSubject) {
      const updatedSubjects = subjectsData.map((subject) =>
        subject.id === editingSubject.id
          ? {
              ...subject,
              name: formData.name,
              code: formData.code,
              instructor: formData.instructor,
              grade: formData.grade,
              credits: Number(formData.credits),
              progress: Number(formData.progress),
            }
          : subject
      );

      setSubjectsData(updatedSubjects);
    } else {
      const newSubject = {
        id: Date.now(),
        name: formData.name,
        code: formData.code,
        instructor: formData.instructor,
        grade: formData.grade,
        credits: Number(formData.credits),
        progress: Number(formData.progress),
      };

      setSubjectsData([
        ...subjectsData,
        newSubject,
      ]);
    }

    closeModal();
  };

  const handleDelete = (subjectId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this subject?'
    );

    if (!confirmed) {
      return;
    }

    const updatedSubjects = subjectsData.filter(
      (subject) => subject.id !== subjectId
    );

    setSubjectsData(updatedSubjects);
  };

  return (
    <div className="subjects-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Academic</p>

          <h1>My Subjects</h1>

          <p>
            Track your subjects and monitor your academic progress.
          </p>
        </div>

        <div className="subjects-actions">
          <div className="subjects-total">
            <BookOpen size={20} />
            <span>{subjectsData.length} Subjects</span>
          </div>

          <button
            className="add-subject-btn"
            onClick={openAddModal}
          >
            <Plus size={18} />
            Add Subject
          </button>
        </div>
      </div>

      <div className="subjects-grid">
        {subjectsData.map((subject) => (
          <div
            className="subject-card"
            key={subject.id}
          >
            <div className="subject-card-header">
              <div className="subject-icon">
                <BookOpen size={21} />
              </div>

              <span className="subject-grade">
                {subject.grade}
              </span>
            </div>

            <div className="subject-card-info">
              <span className="subject-code">
                {subject.code}
              </span>

              <h2>{subject.name}</h2>

              <p className="subject-instructor">
                <UserRound size={15} />
                {subject.instructor}
              </p>
            </div>

            <div className="subject-progress">
              <div className="subject-progress-header">
                <span>Progress</span>
                <strong>{subject.progress}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${subject.progress}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="subject-card-footer">
              <span>
                {subject.credits} Credits
              </span>

              <div className="subject-card-actions">
                <button
                  className="edit-subject-btn"
                  onClick={() => openEditModal(subject)}
                  title="Edit subject"
                >
                  <Pencil size={15} />
                </button>

                <button
                  className="delete-subject-btn"
                  onClick={() => handleDelete(subject.id)}
                  title="Delete subject"
                >
                  <Trash2 size={15} />
                </button>

                <Link
                  to={`/subjects/${subject.id}`}
                  className="subject-details-link"
                >
                  View Details
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="subject-modal">
            <div className="modal-header">
              <div>
                <h2>
                  {editingSubject
                    ? 'Edit Subject'
                    : 'Add New Subject'}
                </h2>

                <p>
                  {editingSubject
                    ? 'Update the subject information'
                    : 'Enter the subject information'}
                </p>
              </div>

              <button
                className="modal-close-btn"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Subject Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Data Structures"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Subject Code</label>

                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="e.g. CS201"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Instructor</label>

                  <input
                    type="text"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleChange}
                    placeholder="e.g. Dr. Ahmed"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Grade</label>

                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select grade</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Credits</label>

                  <input
                    type="number"
                    name="credits"
                    value={formData.credits}
                    onChange={handleChange}
                    placeholder="e.g. 3"
                    min="1"
                    max="6"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Progress (%)</label>

                <input
                  type="number"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  placeholder="e.g. 70"
                  min="0"
                  max="100"
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save-subject-btn"
                >
                  {editingSubject
                    ? 'Save Changes'
                    : 'Add Subject'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Subjects;
