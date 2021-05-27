import { api } from "../services/api"

const getCountOfClients = async () => {
    let response = await api.get(`client/list/count`);

    return response.data;
}


export { getCountOfClients }