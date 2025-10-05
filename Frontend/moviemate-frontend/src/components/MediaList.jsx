import React, { useEffect, useState } from 'react';
import { getMedia } from "../api/api.jsx";
import MediaCard from './MediaCard';
import Filters from './Filters';

export default function MediaList(){
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    load();
  }, [query]);

  async function load(){
    const data = await getMedia(query);
    setItems(data);
  }

  return (
    <div className="stack">
      <div className="card row">
        <Filters onChange={(q) => setQuery(q)} />
      </div>
      {items.length === 0 ? (
        <div className="empty">No media yet. Try adjusting filters or add your first item.</div>
      ) : (
        <div className="grid grid-3">
          {items.map(i => <MediaCard media={i} key={i.id} />)}
        </div>
      )}
    </div>
  )
}

