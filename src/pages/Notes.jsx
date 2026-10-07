import {
  Plus,
  Pencil,
  Trash2,
  X,
  FileText,
} from 'lucide-react';

import { useState } from 'react';
import { useStudy } from '../context/StudyContext';

function Notes() {
  const { notesData, setNotesData } = useStudy();

  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openAddModal = () => {
    setEditingNote(null);

    setFormData({
      title: '',
      content: '',
    });

    setShowModal(true);
  };

  const openEditModal = (note) => {
    setEditingNote(note);

    setFormData({
      title: note.title,
      content: note.content,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingNote(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      return;
    }

    if (editingNote) {
      const updatedNotes = notesData.map((note) =>
        note.id === editingNote.id
          ? {
              ...note,
              title: formData.title,
              content: formData.content,
            }
          : note
      );

      setNotesData(updatedNotes);
    } else {
      const newNote = {
        id: Date.now(),
        title: formData.title,
        content: formData.content,
      };

      setNotesData([
        ...notesData,
        newNote,
      ]);
    }

    closeModal();
  };

  const deleteNote = (noteId) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this note?'
    );

    if (!confirmed) {
      return;
    }

    const updatedNotes = notesData.filter(
      (note) => note.id !== noteId
    );

    setNotesData(updatedNotes);
  };

  return (
    <div className="notes-page">
      <div className="page-heading">
        <div>
          <p className="page-label">Study Materials</p>

          <h1>My Notes</h1>

          <p>
            Keep your important study notes organized in one place.
          </p>
        </div>

        <button
          className="add-note-btn"
          onClick={openAddModal}
        >
          <Plus size={18} />
          Add Note
        </button>
      </div>

      <div className="notes-grid">
        {notesData.length === 0 ? (
          <div className="empty-notes">
            <FileText size={30} />

            <h2>No Notes Yet</h2>

            <p>
              Start by creating your first study note.
            </p>
          </div>
        ) : (
          notesData.map((note) => (
            <div
              className="note-card"
              key={note.id}
            >
              <div className="note-card-header">
                <div className="note-icon">
                  <FileText size={19} />
                </div>

                <div className="note-actions">
                  <button
                    className="edit-note-btn"
                    onClick={() => openEditModal(note)}
                    title="Edit note"
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    className="delete-note-btn"
                    onClick={() => deleteNote(note.id)}
                    title="Delete note"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              <div className="note-card-content">
                <h2>{note.title}</h2>

                <p>{note.content}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="note-modal">
            <div className="modal-header">
              <div>
                <h2>
                  {editingNote
                    ? 'Edit Note'
                    : 'Add New Note'}
                </h2>

                <p>
                  {editingNote
                    ? 'Update your note'
                    : 'Create a new study note'}
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
                <label>Note Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. React Hooks"
                  required
                />
              </div>

              <div className="form-group">
                <label>Note Content</label>

                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your note here..."
                  rows="7"
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
                  className="save-note-btn"
                >
                  {editingNote
                    ? 'Save Changes'
                    : 'Add Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;