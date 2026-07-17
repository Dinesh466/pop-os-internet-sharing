import api from "./api";

export const getContainers = () => api.get("/containers");

export const startContainer = (name) =>
  api.post(`/containers/${name}/start`);

export const stopContainer = (name) =>
  api.post(`/containers/${name}/stop`);

export const restartContainer = (name) =>
  api.post(`/containers/${name}/restart`);

export const getLogs = (name) =>
  api.get(`/containers/${name}/logs`);
