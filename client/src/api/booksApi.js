import axios from 'axios';

export const getAll = (body) => axios.get(`books`, {params:body});
export const addAction = (body) =>  axios.post(`users`, body);
export const updateAction = (body) =>  axios.put(`users/${body.uuid}`, body);
export const deleteAction = (uuid) => axios.delete(`users/${uuid}`);
export const getLeads = () => axios.get(`parent-users`);
export const addBulkAction = (body) =>  axios.post(`user-bulk`, body);
export const getOne = (uuid) => axios.get(`users/${uuid}`);
export const updateLeave = (body) =>  axios.post(`leave/${body.uuid}`, body);
