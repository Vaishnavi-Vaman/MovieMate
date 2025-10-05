import React, { useState } from "react";
import { createMedia } from "../api/api.jsx";

function AddMedia() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, director, genre, platform, status };

    try {
      await createMedia(payload);
      setMessage("Media added successfully!");
      setTitle(""); setDirector(""); setGenre(""); setPlatform(""); setStatus("");
    } catch (error) {
      setMessage("Error adding media");
      console.error(error);
    }
  };

  return (
    <main className="container section stack">
      <h1>Add Media</h1>
      {message && <p className="muted">{message}</p>}
      <form onSubmit={handleSubmit} className="card stack">
        <div className="form-row">
          <div className="stack-sm">
            <label className="label">Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="stack-sm">
            <label className="label">Director</label>
            <input className="input" value={director} onChange={(e) => setDirector(e.target.value)} />
          </div>
        </div>
        <div className="form-row">
          <div className="stack-sm">
            <label className="label">Genre</label>
            <input className="input" value={genre} onChange={(e) => setGenre(e.target.value)} />
          </div>
          <div className="stack-sm">
            <label className="label">Platform</label>
            <input className="input" value={platform} onChange={(e) => setPlatform(e.target.value)} />
          </div>
        </div>
        <div className="stack-sm">
          <label className="label">Status</label>
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select</option>
            <option value="watching">Watching</option>
            <option value="completed">Completed</option>
            <option value="wishlist">Wishlist</option>
          </select>
        </div>
        <div className="right">
          <button className="btn btn-primary" type="submit">Add Media</button>
        </div>
      </form>
    </main>
  );
}

export default AddMedia;

