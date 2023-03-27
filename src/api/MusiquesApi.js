import axios from "axios";

const getListMusiques = async () => {
  const response = await axios.get("http://localhost:3002/musiques");
  return response.data;
};

const MusiqueApi = {
  getListMusiques,
};

export default MusiqueApi;
