import { Button } from "../styledcomponents/Button";
import React, { useEffect, useState } from "react";
import Input from "../styledcomponents/Input";
import styles from "./Form.module.css";
import { connect } from "react-redux";
import { CreateAccount } from "../../store/action/actions";
import Alert from "../alert/Alert";

function MainForm(props) {
  const { result, feedback, createuser } = props;
  const [resultStatus, setResult] = useState("");
  const [resultContent, setResContent] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConf: "",
  });

  const [alert, setAlert] = useState({
    emailalert: "",
    passwordalert: "",
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

  const confirmPassword = (pwd) => {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pwd.length === 0) {
      setError("passwordalert", "Invalid password");
      return false;
    }
    if (pwd.match(decimal) === null) {
      setError(
        "passwordalert",
        "The password field should accept Uppercase letters, lowercase letters, numbers and special characters"
      );
      return false;
    }
    return true;
  };

  const validate = () => {
    let tempemail = email.match(/.+\@.+\..+/);
    if (tempemail === null) {
      setError("emailalert", "Invalid email");
      return false;
    }
    if (confirmPassword(password)) {
      if (password !== passwordConf) {
        setError("emailalert", "");
        setError(
          "passwordalert",
          "password should be equal with passwordconfirm"
        );
        return false;
      }
      setError("passwordalert", "");
      return true;
    }
    return false;
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(values);
    let isvalid = validate();
    if (isvalid) {
      createuser(values.email, values.password);
    } else {
      return;
    }
  };

  const { email, password, passwordConf } = values;
  const { emailalert, passwordalert } = alert;

  useEffect(() => {
    if (result.result) {
      setResult(true);
      setResContent("successfully created");
    }
    if (result.result === false) {
      setResult(false);
      setResContent("user creation failed");
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
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <form>
        <Input
          placeholder="email"
          name="email"
          error={emailalert}
          value={email}
          onChange={handlechange}
        />
        <Input
          placeholder="password"
          type="password"
          name="password"
          error={passwordalert}
          value={password}
          onChange={handlechange}
        />
        <Input
          placeholder="confirm password"
          type="password"
          name="passwordConf"
          value={passwordConf}
          onChange={handlechange}
        />
        <div className={styles.btnbox} onClick={onsubmit}>
          <Button>SUBMIT</Button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    result: state.main.createresult,
    feedback: state.main.createfeedback,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createuser: (email, password) => dispatch(CreateAccount(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
