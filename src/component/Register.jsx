import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Data } from "../Context/Context";
import { useContext } from "react";

const Register = () => {
  const { state } = useContext(Data);

  const [value, setvalue] = useState({
    name: state.Name,
    genres: state.Genres,
    status: state.Status,
    lan: state.Lan,
  });

  // useEffect(() => {

  //     setvalue({

  //         ...value, name: state.Name

  //     })

  // }, [])

  const change = (e) => {
    setvalue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    const { name } = value;

    if (name.length < 1 || name === " ") {
      alert("please enter name");
    }

    alert("all fine");
  };

  return (
    <Container>
      <div className="title">Welcome</div>

      <LoginForm>
        <div className="heading">
            Movie details
        </div>
        <div className="d-md-flex justify-content-between gap-3">
          <div className="input">
            <label htmlFor="email">Flim name</label>

            <div className="inputCon">
              <input
                onChange={change}
                type="text"
                value={value.name}
                name="name"
                id="email"
                placeholder="Enter Name"
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="genres">Genre</label>

            <div className="inputCon">
              <input
                value={value.genres}
                onChange={change}
                type="text"
                name="genres"
                id="genres"
                placeholder="Enter Email"
              />
            </div>
          </div>
        </div>

        <div className="d-md-flex justify-content-between gap-3">
          <div className="input">
            <label htmlFor="status">Status</label>

            <div className="inputCon">
              <input
                value={value.status}
                onChange={change}
                type="text"
                name="status"
                id="status"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="input">
            <label htmlFor="lan">Language</label>

            <div className="inputCon">
              <input
                value={value.lan}
                onChange={change}
                type="text"
                name="lan"
                id="lan"
                placeholder="Enter Email"
              />
            </div>
          </div>
        </div>

        <Button onClick={submit}>Next</Button>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 40px;
margin-top: 40px;
  .title {
    color: white;
    font-weight: 600;
  }
`;

const LoginForm = styled.form`
   width:600px;
   max-width: 600px;

  min-height: 350px;
  /* justify-content: center; */
  border-radius: 10px;
  /* border: 1px solid grey; */
  margin-top: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding-bottom: 40px;
  background-color: white;
  padding: 30px;

  @media (max-width: 640px) {
    width: 100%;
  }

.heading{

    font-size: 22px;
    font-weight: bold;
}

  .input {
    /* border: 1px solid red; */
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 40px;

    label {
      font-size: 13px;
      font-weight: 600;
    }

    .inputCon {
      display: flex;
      margin-top: 10px;
      border: 1px solid transparent;
      border-radius: 5px;
      padding: 2px;
      height: 40px;

      input {
        height: 100%;
        width: 100%;
        border: none;
        font-size: 15px;
        padding: 20px 10px;
        border: 1px solid grey;
        border-radius: 5px;
      }
    }
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 17px;
  cursor: pointer;
  margin-top: 30px;
  color: white;
  background: linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%);
  border: none;
  border-radius: 5px;
`;

export default Register;
