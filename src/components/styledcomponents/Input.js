import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { placeholder, value, type, error, inputtype, onChange, name } = props;
  return (
    <Container inputtype={inputtype}>
      <UserInput
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        name={name}
      />
      {error && (
        <ErrorText>
          <i className="fa fa-warning" style={{ fontSize: "16px" }}></i>
          {error}
        </ErrorText>
      )}
    </Container>
  );
};

export default Input;

const UserInput = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: solid 1px rgb(15, 193, 238);
  &:focus {
    outline: none;
    border: solid 1px rgb(15, 193, 238);
    box-shadow: 0 0 0 2px #88b8ff;
    border-radius: 5px;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 15px;
  padding: 0px;
  padding-left: 5px;
  margin: 0px;
`;

const Container = styled.div`
  padding: 10px;
  float: left;
  box-sizing: border-box;
  width: ${(props) => (props.inputtype === "address" ? "50%" : "100%")};
`;
