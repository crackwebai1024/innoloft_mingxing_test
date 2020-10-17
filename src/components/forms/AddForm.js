import React, { useEffect, useState } from "react";
import { Button } from "../styledcomponents/Button";
import Input from "../styledcomponents/Input";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import { AddAccount } from "../../store/action/actions";
import Alert from "../alert/Alert";

function AddForm(props) {
  const { result, feedback, adduser } = props;
  const [resultStatus, setResult] = useState("");
  const [resultContent, setResContent] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    country: "Germany",
  });

  const [alert, setAlert] = useState({
    firstNameAlert: "",
    lastNameAlert: "",
    streetAlert: "",
    houseNumberAlert: "",
    postalCodeAlert: "",
    countryAlert: "",
  });

  const handlechange = (e) => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const setError = (name, error) => {
    setAlert({
      ...values,
      [name]: error,
    });
  };

  const validation = () => {
    for (let x in values) {
      if (values[x].length === 0) {
        setError(`${x}Alert`, `invalid ${x}`);
        return false;
      }
      setError(`${x}Alert`, "");
    }
    // house number should be the string with the numbers
    if (values.houseNumber.match(/^[0-9]{1,45}$/) === null) {
      console.log(values.houseNumber);
      setError("houseNumberAlert", "invalid house number");
      return false;
    }
    setError("houseNumberAlert", "");
    // postal code should be 5digit code
    if (values.postalCode.match(/^[0-9]{5}$/) === null) {
      setError("postalCodeAlert", "postal code should be 5 digits");
      return false;
    }
    setError("postalCodeAlert", "");
    return true;
  };

  const onsubmit = (e) => {
    e.preventDefault();
    let isvalid = validation();
    console.log(isvalid.toString());
    if (isvalid) {
      adduser(
        values.firstName,
        values.lastName,
        values.street,
        values.houseNumber,
        values.postalCode,
        values.country
      );
    }
  };

  const {
    firstName,
    lastName,
    street,
    houseNumber,
    postalCode,
    country,
  } = values;

  const {
    firstNameAlert,
    lastNameAlert,
    streetAlert,
    houseNumberAlert,
    postalCodeAlert,
    countryAlert,
  } = alert;

  useEffect(() => {
    if (result.result) {
      setResult(true);
      setResContent("successfully added");
    }
    if (result.result === false) {
      setResult(false);
      setResContent("addition failed");
    }
    setTimeout(() => {
      setResContent("");
    }, 5000);
  }, [result]);

  useEffect(() => {
    setResContent("");
  }, []);

  return (
    <div className={styles.wrapper}>
      {resultContent !== "" && (
        <Alert content={resultContent} status={resultStatus} />
      )}
      <h1 style={{ textAlign: "center" }}>Create Account</h1>
      <Input
        placeholder="first name"
        type="text"
        name="firstName"
        error={firstNameAlert}
        onChange={handlechange}
      />
      <Input
        placeholder="last name"
        type="text"
        name="lastName"
        error={lastNameAlert}
        onChange={handlechange}
      />
      <Input
        placeholder="street"
        type="text"
        name="street"
        error={streetAlert}
        inputtype="address"
        onChange={handlechange}
      />
      <Input
        placeholder="house number"
        type="text"
        name="houseNumber"
        error={houseNumberAlert}
        inputtype="address"
        onChange={handlechange}
      />
      <Input
        placeholder="postal code"
        type="text"
        name="postalCode"
        error={postalCodeAlert}
        inputtype="address"
        onChange={handlechange}
      />
      <select className={styles.contsel} name="country" onChange={handlechange}>
        <option value="Germany">Germany</option>
        <option value="Austria">Austria</option>
        <option value="Switzerland">Switzerland</option>
      </select>
      <div className={styles.btnbox} onClick={onsubmit}>
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    result: state.main.addresult,
    feedback: state.main.addfeedback,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adduser: (firstName, lastName, street, houseNumber, postalCode, country) =>
      dispatch(
        AddAccount(
          firstName,
          lastName,
          street,
          houseNumber,
          postalCode,
          country
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
