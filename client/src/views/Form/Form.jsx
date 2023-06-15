import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthscore: 0,
    steps: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthscore: "",
    steps: "",
  });

  const changeHandler = (event) => {
    //Esta función tiene que leer lo que escribí en el form y guardarlo en el estado.
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value }); // Le paso el mismo estado del form a validate para que no haga delay en las validaciones
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {};

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/recipes", form) // form lo envìo por body
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <label>Summary: </label>
        <input
          type="text"
          value={form.summary}
          onChange={changeHandler}
          name="summary"
        />
      </div>
      <div>
        <label>HealthScore: </label>
        <input
          type="number"
          value={form.healthscore}
          onChange={changeHandler}
          name="healthscore"
        />
      </div>
      <div>
        <label>Steps: </label>
        <input
          type="text"
          value={form.steps}
          onChange={changeHandler}
          name="steps"
        />
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};
export default Form;
