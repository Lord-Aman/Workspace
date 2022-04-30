import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import Button from "react-bootstrap/button";
import "react-dropdown/style.css";
import styles from "./DropdownList.module.css";

function DropdownList() {
  const arr = ["A", "B", "C", "D", "E"];

  const [options, setOptions] = useState(arr);
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [val3, setVal3] = useState(null);

  useEffect(() => {
    const updateOptions = arr.filter(
      (element) => element !== val1 && element !== val2 && element !== val3
    );

    setOptions(updateOptions);
  }, [val1, val2, val3]);

  const handleSubmit = () => {
    val1
      ? console.log("Dropdown 1: ", val1)
      : console.log("Error: Dropdown 1 is not selected");
    val2
      ? console.log("Dropdown 2: ", val2)
      : console.log("Error: Dropdown 2 is not selected");
    val3
      ? console.log("Dropdown 3: ", val3)
      : console.log("Error: Dropdown 3 is not selected");
  };

  const handleReset = () => {
    setVal1(null);
    setVal2(null);
    setVal3(null);
  };
  return (
    <div className={styles.dropdownContainer}>
      <Dropdown
        className={styles.dropdownItem}
        options={options}
        onChange={(e) => setVal1(e.value)}
        value={val1}
        placeholder={"Dropdown 1"}
      />
      <Dropdown
        className={styles.dropdownItem}
        options={options}
        onChange={(e) => setVal2(e.value)}
        value={val2}
        placeholder={"Dropdown 2"}
      />
      <Dropdown
        className={styles.dropdownItem}
        options={options}
        onChange={(e) => setVal3(e.value)}
        value={val3}
        placeholder={"Dropdown 3"}
      />
      <Button variant="success" onClick={handleSubmit}>
        Submit
      </Button>
      <Button
        className={styles.resetButton}
        variant="danger"
        onClick={handleReset}
      >
        Reset All
      </Button>
    </div>
  );
}

export default DropdownList;
