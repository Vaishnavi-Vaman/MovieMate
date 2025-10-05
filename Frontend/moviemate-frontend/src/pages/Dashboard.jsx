import React from 'react';
import MediaList from '../components/MediaList.jsx';

export default function Dashboard(){
  return (
    <main className="container section stack-lg">
      <section className="hero">
        <h1>Dashboard</h1>
        <p className="muted">Browse and track your movies and shows.</p>
      </section>
      <MediaList />
    </main>
  )
}
