import { api, apiAuth } from "../services/api"

const getCountOfClients = async () => {
    let response = await api.get(`client/list/count`);

    return response.data;
}

const getAllClients = async () => {
    let response = await apiAuth.get('client');

    return response.data;
}
const getAllClientsPagination = async () => {
    let response = await apiAuth.get('client/pagination');

    return response.data;
}

const createNewClient = async (data) => {
    let response = await apiAuth.post('client', data);

    return response.data;
}


export { getCountOfClients, getAllClients, createNewClient, getAllClientsPagination }