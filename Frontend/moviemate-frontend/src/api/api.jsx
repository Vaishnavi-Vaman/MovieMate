const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

async function request(path, method='GET', body=null) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${API_BASE}${path}`, opts);
  const data = await res.json();
  return data;
}

export const getMedia = (params='') => request(`/media/?${params}`);
export const getMediaById = (id) => request(`/media/${id}/`);
export const createMedia = (payload) => request('/media/', 'POST', payload);
export const updateMedia = (id, payload) => request(`/media/${id}/`, 'PUT', payload);
export const deleteMedia = (id) => request(`/media/${id}/`, 'DELETE');
export const setProgress = (id, payload) => request(`/media/${id}/set_progress/`, 'POST', payload);
export const getRecommendations = () => request('/recommend/');
export const createReview = (payload) => request('/reviews/', 'POST', payload);
