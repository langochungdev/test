import axios from 'axios'

const API = 'https://ed309508f10b.ngrok-free.app/api/users'

export default {
    getAll: () => axios.get(API).then(res => res.data),
    getByUsername: (username) => axios.get(`${API}/${username}`).then(res => res.data),
    create: (data) => axios.post(API, data).then(res => res.data),
    update: (username, data) => axios.put(`${API}/${username}`, data).then(res => res.data),
    remove: (username) => axios.delete(`${API}/${username}`).then(res => res.data)
}
