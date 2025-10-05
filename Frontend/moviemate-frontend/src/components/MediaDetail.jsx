import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMediaById, createReview, getRecommendations } from '../api/api.jsx';
import ProgressTracker from './ProgressTracker';
import ReviewForm from './ReviewForm';

export default function MediaDetail(){
  const { id } = useParams();
  const [item, setItem] = useState(null);

  async function load(){
    const res = await getMediaById(id);
    setItem(res);
  }

  useEffect(()=>{
    load();
  }, [id]);

  if(!item) return <main className="container section"><div className="card">Loading...</div></main>;

  const progress = item.progress?.[0] || null;

  return (
    <main className="container section stack">
      <section className="card stack">
        <div className="row-between">
          <h2 style={{margin:0}}>{item.title}</h2>
          {item.year && <span className="badge"><span className="badge-dot" />{item.year}</span>}
        </div>
        <p className="muted" style={{margin:0}}>{item.director} • {item.genre} • {item.platform}</p>
      </section>

      <ProgressTracker media={item} currentProgress={progress} onUpdated={load} />

      <section className="stack">
        <h3 style={{margin:0}}>Reviews</h3>
        {item.reviews?.length ? (
          <div className="grid grid-2">
            {item.reviews.map(r => (
              <div className="card stack" key={r.id}>
                <strong>{r.rating}/10</strong>
                <p style={{margin:0}}>{r.notes}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">No reviews yet.</div>
        )}
        <ReviewForm mediaId={item.id} onAdded={load} />
      </section>
    </main>
  )
}
