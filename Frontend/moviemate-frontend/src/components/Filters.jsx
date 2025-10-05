import React, { useState } from 'react';

export default function Filters({onChange}){
  const [genre, setGenre] = useState('');
  const [platform, setPlatform] = useState('');
  const [status, setStatus] = useState('');

  function submit(){
    const params = new URLSearchParams();
    if(genre) params.append('genre', genre);
    if(platform) params.append('platform', platform);
    if(status) params.append('status', status);
    onChange(params.toString());
  }

  return (
    <div className="row" style={{flexWrap:'wrap'}}>
      <input className="input" placeholder="Genre" value={genre} onChange={e=>setGenre(e.target.value)} />
      <input className="input" placeholder="Platform" value={platform} onChange={e=>setPlatform(e.target.value)} />
      <select className="select" value={status} onChange={e=>setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="watching">Watching</option>
        <option value="completed">Completed</option>
        <option value="wishlist">Wishlist</option>
      </select>
      <button className="btn btn-primary" onClick={submit}>Apply</button>
    </div>
  )
}

