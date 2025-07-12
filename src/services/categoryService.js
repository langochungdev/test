import axios from 'axios'

const API = `${import.meta.env.VITE_API_BASE}/categories`

export default {
    getAll: () => axios.get(API).then(res => res.data),
    getById: (id) => axios.get(`${API}/${id}`).then(res => res.data),
    create: (data) => axios.post(API, data).then(res => res.data),
    update: (id, data) => axios.put(`${API}/${id}`, data).then(res => res.data),
    remove: (id) => axios.delete(`${API}/${id}`).then(res => res.data)
}
