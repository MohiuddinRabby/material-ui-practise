import axios from "axios";

export const saveNotes = async (data) => {
  try {
    const res = await axios.post(`http://localhost:8000/note`, data);
    if (res.status === 201) {
      alert("Notes saved to DB");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const getNotes = async (setter) => {
  try {
    const res = await axios.get(`http://localhost:8000/note`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
