import React, { useState } from 'react';

export default function MediaForm({initial={}, onSubmit}){
  const [form, setForm] = useState({
    title: initial.title || '',
    director: initial.director || '',
    genre: initial.genre || '',
    platform: initial.platform || '',
    status: initial.status || 'wishlist',
    media_type: initial.media_type || 'movie',
    total_episodes: initial.total_episodes || 1,
  });

  function change(e){
    const {name, value} = e.target;
    setForm(prev=>({...prev, [name]: value}));
  }

  function submit(e){
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={submit} className="card stack">
      <div className="form-row">
        <div className="stack-sm">
          <label className="label">Title</label>
          <input className="input" name="title" value={form.title} onChange={change} placeholder="Inception" required />
        </div>
        <div className="stack-sm">
          <label className="label">Director</label>
          <input className="input" name="director" value={form.director} onChange={change} placeholder="Christopher Nolan" />
        </div>
      </div>
      <div className="form-row">
        <div className="stack-sm">
          <label className="label">Genre</label>
          <input className="input" name="genre" value={form.genre} onChange={change} placeholder="Sci-Fi" />
        </div>
        <div className="stack-sm">
          <label className="label">Platform</label>
          <input className="input" name="platform" value={form.platform} onChange={change} placeholder="Netflix" />
        </div>
      </div>
      <div className="form-row">
        <div className="stack-sm">
          <label className="label">Type</label>
          <select className="select" name="media_type" value={form.media_type} onChange={change}>
            <option value="movie">Movie</option>
            <option value="tv">TV Show</option>
          </select>
        </div>
        <div className="stack-sm">
          <label className="label">Total Episodes</label>
          <input className="input" name="total_episodes" type="number" value={form.total_episodes} onChange={change} min={1} />
        </div>
      </div>
      <div className="stack-sm">
        <label className="label">Status</label>
        <select className="select" name="status" value={form.status} onChange={change}>
          <option value="watching">Watching</option>
          <option value="completed">Completed</option>
          <option value="wishlist">Wishlist</option>
        </select>
      </div>
      <div className="right">
        <button className="btn btn-primary" type="submit">Save</button>
      </div>
    </form>
  )
}

