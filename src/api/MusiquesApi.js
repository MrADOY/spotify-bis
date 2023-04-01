import axios from "axios";

const getListMusiques = async () => {
  const response = await axios.get("http://localhost:3002/musiques");
  return response.data;
};

const getMusiqueDetail = async (musiqueId) => {
  const response = await axios.get(
    `http://localhost:3002/musiques/${musiqueId}`
  );
  return response.data;
};

const MusiqueApi = {
  getListMusiques,
  getMusiqueDetail,
};

export default MusiqueApi;
