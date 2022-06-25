import { useState } from "react";
import React from "react";
import styles from "../pages/styles/profileUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/action";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const [form, setForm] = useState({});
  const handleChangeOnForm = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user.id, form));
    setForm({});
    swal("Perfil actualizado!", "Correctamente", "success");
    navigate("/home");
  };

  return (
    <div className={styles.edit}>
      <h3 className="profileUserTitle">MY PROFILE</h3>

      <form
        action=""
        className={styles.form}
        onChange={handleChangeOnForm}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="name"
          name="name"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="last name"
          name="last_name"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="country"
          name="country"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="province state"
          name="province_state"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="phone number"
          name="phone_number"
        />
        {/* <input className={styles.input} type="text" placeholder="email" /> */}
        <button className={styles.button} type="submit">
          Update 🖊
        </button>
      </form>
    </div>
  );
}
