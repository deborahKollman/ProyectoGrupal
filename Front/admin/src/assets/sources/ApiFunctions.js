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