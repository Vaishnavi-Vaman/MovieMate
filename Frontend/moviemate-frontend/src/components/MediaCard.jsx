import React from 'react';
import { Link } from 'react-router-dom';

export default function MediaCard({media}){
  return (
    <div className="card stack">
      <div className="row-between">
        <h3 style={{margin:0}}>{media.title}</h3>
        {media.year && <span className="badge"><span className="badge-dot" />{media.year}</span>}
      </div>
      {media.director && <p className="muted" style={{margin:0}}>{media.director}</p>}
      <p style={{margin:0}}>{media.genre} • {media.platform}</p>
      <div className="right">
        <Link className="btn btn-primary" to={`/media/${media.id}`}>Details</Link>
      </div>
    </div>
  )
}
