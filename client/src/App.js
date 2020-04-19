import React, { useState } from "react";
import logo from "./logo.svg";
import axios from "axios";

function App() {
  const [val, setVal] = useState(null);
  const apiCall = async (fecNum) => {
    let newNum;
    setInterval(async () => {
      const data = await axios.get(
        `https://api.open.fec.gov/v1/committee/${fecNum}/filings/?sort_null_only=false&page=1&sort_nulls_last=false&api_key=${process.env.REACT_APP_FEC_KEY}&per_page=20&sort_hide_null=false&election_full=true`
      );
      newNum = data.data.results[0].fec_file_id;
      localStorage.setItem("Most_Recent_Filing", newNum);
      let oldNum = localStorage.getItem("Most_Recent_Filing");
      if (oldNum === newNum) {
      }
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall(val);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">
          Enter the FEC Committee Number here:{" "}
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          onChange={handleChange}
          placeholder="FEC Committee Number"
        />
      </div>
      <div>{}</div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default App;
