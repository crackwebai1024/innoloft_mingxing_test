import styled from "styled-components";

export const Button = styled.button`
  text-transform: capitalize;
  width: 150px;
  height: 35px;
  font-size: 1rem;
  font-weight: 600;
  background: transparent;
  background-color: dodgerblue;
  border: 2px solid dodgerblue;
  border-radius: 0.3rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  margin: auto;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: blue;
    color: yellow;
  }
  &:focus {
    outline: none;
  }
`;
