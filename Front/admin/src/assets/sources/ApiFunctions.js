import axios from "axios";

export const act_putCategory = async (pIdentity, oForm) => {
  try {
    const { data } = await axios.put(`http://localhost:3001/categories/${pIdentity}`, oForm);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const act_postService = async (oForm) => {
  try {
    const { data } = await axios.post(`http://localhost:3001/services`, oForm);
    return data;
  } catch (error) {
    console.log(error);
  }
};


export async function act_getOneService (pIdentity) {
  try {
    const { data } = await axios.get( `http://localhost:3001/services/${pIdentity}` );
    return data
  } catch (error) {console.log(error);}
}

export async function DeleteService (pIdentity) {
  try {
    const { data } = await axios.delete( `http://localhost:3001/services/${pIdentity}` );
    return data
  } catch (error) {console.log(error);}
}

export async function PutService (pIdentity, oForm) {
  try {
    const { data } = await axios.put( `http://localhost:3001/services/${pIdentity}`, oForm );
    return data
  } catch (error) {console.log(error);}
}

export async function PostUser (oForm) {
  try {
    const { data } = await axios.post( `http://localhost:3001/users`, oForm, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data
  } catch (error) {console.log(error);}
}