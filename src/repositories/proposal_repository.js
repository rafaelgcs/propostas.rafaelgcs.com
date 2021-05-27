import { api } from "../services/api"

const getProposalById = async (client_id, id) => {
    let response = await api.get(`proposal/byId/${client_id}/${id}`);
    return response.data;
}

const getProposalByClient = async (client_name) => {
    let response = await api.get(`proposal/byClientName/${client_name}`);

    return response.data;
}

const getCountOfProposals = async () => {
    let response = await api.get(`proposal/list/count`);

    return response.data;
}


export { getProposalById, getProposalByClient, getCountOfProposals }