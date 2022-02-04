import react, { useState } from "react";

function App() {
  const [field, setField] = useState("");
  const [condition, setCondition] = useState("");
  const [criteria, setCriteria] = useState("");

  const fields = [
    "Theme",
    "Sub-theme",
    "Reason",
    "Language",
    "Source",
    "Rating",
    "Time Period",
    "Customer ID",
  ];
  const conditions = [
    "Equals",
    "Does not equal",
    "Like",
    "Not Like",
    "Is Empty",
    "Is",
    "Is not",
  ];
  const criterias = ["Offers", "Performance", "Platform", "Product Feedback"];

  const handleChange = (e) => {
    if (e.target.name === "Field") setField(e.target.value);
    if (e.target.name === "Condition") setCondition(e.target.value);
    if (e.target.name === "Criteria") setCriteria(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("queryClicked");
  };

  return (
    <>
      <div className="home-container">
        <h1 className="navbar">Query App</h1>
        <h1>Field : {field}</h1>
        <h1>Condition : {condition}</h1>
        <h1>Criteria : {criteria}</h1>

        <form>
          <div className="dropdown-container">
            <div className="dropdown">
              <select name="Field" id="field" onChange={handleChange}>
                <option value="">Select Field</option>
                {fields.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            <div className="dropdown">
              <select name="Condition" id="condition" onChange={handleChange}>
                <option value="">Select Conditon</option>
                {conditions.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
            <div className="dropdown">
              <select name="Criteria" id="criteria" onChange={handleChange}>
                <option value="">Select Criteria</option>
                {criterias.map((val) => (
                  <option value={val}>{val}</option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={handleSubmit}>Generate Query</button>
        </form>
      </div>
    </>
  );
}

export default App;