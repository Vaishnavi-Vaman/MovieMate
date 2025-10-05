import React, { useState } from 'react';
import { setProgress } from '../api/api.jsx';

export default function ProgressTracker({media, currentProgress, onUpdated}){
  const [ep, setEp] = useState(currentProgress?.episodes_watched || 0);

  async function save(){
    const res = await setProgress(media.id, { episodes_watched: Number(ep) });
    onUpdated(res); // parent should reload
  }

  return (
    <section className="card row" style={{flexWrap:'wrap'}}>
      <div className="stack" style={{minWidth:200}}>
        <strong>{media.title}</strong>
        <span className="muted">Episodes: {ep}/{media.total_episodes}</span>
      </div>
      <input className="input" type="number" value={ep} min={0} max={media.total_episodes} onChange={e=>setEp(e.target.value)} style={{width:140}} />
      <button className="btn btn-primary" onClick={save}>Update</button>
    </section>
  )
}
