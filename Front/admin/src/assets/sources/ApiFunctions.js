import axios from "axios";

export const act_putCategory = async (pIdentity, oForm) => {
  try {
    const { data } = await axios.put(`http://localhost:3001/categories/${pIdentity}`, oForm);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
