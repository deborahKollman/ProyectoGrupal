import axios from "axios";

const URL = "http://localhost:3001";

export const DeletePublication = (id) => {
  try {
    const responce = axios.delete(`${URL}/publications/${id}`);
    return responce;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetPublicationByID = (id) => {
  try {
    const responce = axios.get(`${URL}/publications/${id}`);
    return responce;
  } catch (error) {
    console.log(error.message);
  }
};

export const UploadPublication = async (pId, pForm) => {
  try {
    // const responce = await axios.put(`${URL}/publications/${pId}`, pForm, {
    //   headers: { "Content-Type": "multipart/form-data" },
    // });
    // return responce;
    // const responce = await axios ({
    //   method: "put",
    //   url: `${URL}/publications/${pId}`,
    //   data: pForm,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    // return responce;
    axios.put(`${URL}/publications/${pId}`, pForm, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  } catch (error) {
    console.log(error.message);
  }
};
