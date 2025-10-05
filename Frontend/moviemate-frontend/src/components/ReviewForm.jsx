import React, { useState } from 'react';
import { createReview } from '../api/api.jsx';

export default function ReviewForm({mediaId, onAdded}){
  const [rating, setRating] = useState(8);
  const [notes, setNotes] = useState('');

  async function submit(e){
    e.preventDefault();
    await createReview({ media: mediaId, rating, notes });
    setNotes('');
    onAdded();
  }

  return (
    <form onSubmit={submit} className="card stack">
      <div className="row" style={{flexWrap:'wrap'}}>
        <input className="input" style={{width:120}} type="number" min="0" max="10" value={rating} onChange={e=>setRating(e.target.value)} />
        <button className="btn btn-primary" type="submit">Add Review</button>
      </div>
      <textarea className="textarea" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Short notes" rows={3} />
    </form>
  )
}
