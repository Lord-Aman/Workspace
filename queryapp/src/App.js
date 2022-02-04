import react, { useState } from "react";

function App() {
  const [field, setField] = useState("");
  const [condition, setCondition] = useState("");
  const [offer, setOffer] = useState("");

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

  return (
    <>
      <div className="home-container">
        <div className="navbar">Query Apvp</div>
        <div className="dropdown-container">
          <div className="dropdown">
            <select name="field" id="field">
              {fields.map((val) => (
                <option value={val}>{val}</option>
              ))}
            </select>
          </div>
          <div className="dropdown">
            <select name="condition" id="condition">
              {conditions.map((val) => (
                <option value={val}>{val}</option>
              ))}
            </select>
          </div>
          <div className="dropdown">
            <select name="criteria" id="criteria">
              {criterias.map((val) => (
                <option value={val}>{val}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
