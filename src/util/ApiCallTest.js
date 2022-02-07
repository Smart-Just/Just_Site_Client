import axios from "axios";

export const postApi = async (url, data) =>{
  const doc = await axios.post(url , data);
  return doc.data
}

export const getApi = async (url, data) =>{
  const doc = await axios.get(url);
  return doc.data
}