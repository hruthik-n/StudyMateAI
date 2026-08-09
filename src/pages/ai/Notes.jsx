import { useState } from "react";
import "../../styles/notes.css";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Introduction to Machine Learning",
      subject: "Machine Learning",
      content:
        "Machine Learning is a branch of AI that allows computers to learn from data.",
      date: "Aug 6",
    },
    {
      id: 2,
      title: "React Components",
      subject: "Full Stack Development",
      content:
        "Components are reusable building blocks used to create React applications.",
      date: "Aug 5",
    },
    {
      id: 3,
      title: "IoT Architecture",
      subject: "Internet of Things",
      content:
        "IoT architecture consists of devices, communication networks, data processing and applications.",
      date: "Aug 4",
    },
  ]);

  const [search, setSearch] = useState("");
  const [showEditor, setShowEditor] = useState(false);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState(null);

  // Clear form
  const clearForm = () => {
    setTitle("");
    setSubject("");
    setContent("");
    setEditingId(null);
  };

  // Open create note
  const openNewNote = () => {
    clearForm();
    setShowEditor(true);
  };

  // Save or update note
  const saveNote = () => {
    if (!title.trim() || !content.trim()) {
      alert("Please enter a title and note content.");
      return;
    }

    // Update existing note
    if (editingId) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title,
                subject: subject || "General",
                content: content,
              }
            : note
        )
      );
    } else {
      // Create new note
      const newNote = {
        id: Date.now(),
        title: title,
        subject: subject || "General",
        content: content,
        date: "Today",
      };

      setNotes([newNote, ...notes]);
    }

    clearForm();
    setShowEditor(false);
  };

  // Edit note
  const editNote = (note) => {
    setTitle(note.title);
    setSubject(note.subject);
    setContent(note.content);
    setEditingId(note.id);
    setShowEditor(true);
  };

  // Delete note
  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  // Search notes
  const filteredNotes = notes.filter((note) => {
    const searchText = search.toLowerCase();

    return (
      note.title.toLowerCase().includes(searchText) ||
      note.subject.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="notes-page">

      {/* Header */}
      <div className="page-header">
        <div>
          <h1>📝 My Notes</h1>
          <p>
            Create, organize and quickly find your study notes.
          </p>
        </div>

        <button
          className="create-note-button"
          onClick={openNewNote}
        >
          + Create Note
        </button>
      </div>

      {/* Search */}
      <div className="notes-toolbar">

        <div className="notes-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="notes-count">
          {filteredNotes.length} Notes
        </div>

      </div>

      {/* Note Editor */}
      {showEditor && (
        <div className="note-editor">

          <div className="note-editor-header">

            <h2>
              {editingId ? "✏️ Edit Note" : "📝 Create New Note"}
            </h2>

            <button
              className="close-note-editor"
              onClick={() => {
                clearForm();
                setShowEditor(false);
              }}
            >
              ✕
            </button>

          </div>

          {/* Title */}
          <label>Title</label>

          <input
            className="note-title-input"
            type="text"
            placeholder="Enter note title..."
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          {/* Subject */}
          <label>Subject</label>

          <select
            className="note-subject-select"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          >
            <option value="">Select subject</option>

            <option value="Machine Learning">
              Machine Learning
            </option>

            <option value="Full Stack Development">
              Full Stack Development
            </option>

            <option value="Internet of Things">
              Internet of Things
            </option>

            <option value="Data Structures">
              Data Structures
            </option>

            <option value="General">
              General
            </option>
          </select>

          {/* Content */}
          <label>Note</label>

          <textarea
            className="note-content-input"
            placeholder="Start writing your note..."
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          {/* Buttons */}
          <div className="note-editor-buttons">

            <button
              className="cancel-note-button"
              onClick={() => {
                clearForm();
                setShowEditor(false);
              }}
            >
              Cancel
            </button>

            <button
              className="save-note-button"
              onClick={saveNote}
            >
              {editingId ? "Update Note" : "Save Note"}
            </button>

          </div>

        </div>
      )}

      {/* Notes Grid */}
      <div className="notes-grid">

        {filteredNotes.length > 0 ? (

          filteredNotes.map((note) => (

            <div
              className="note-card"
              key={note.id}
            >

              {/* Card Header */}
              <div className="note-card-header">

                <span className="note-subject">
                  {note.subject}
                </span>

                <span className="note-date">
                  {note.date}
                </span>

              </div>

              {/* Title */}
              <h2>{note.title}</h2>

              {/* Content */}
              <p className="note-preview">
                {note.content}
              </p>

              {/* Footer */}
              <div className="note-card-footer">

                <button
                  className="edit-note-button"
                  onClick={() => editNote(note)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-note-button"
                  onClick={() => deleteNote(note.id)}
                >
                  🗑️ Delete
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-notes">

            <div>📝</div>

            <h2>No notes found</h2>

            <p>
              Try another search or create a new note.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Notes;