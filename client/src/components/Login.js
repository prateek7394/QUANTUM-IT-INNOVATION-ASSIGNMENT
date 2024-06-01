import React, { useState } from "react";
import "./Login.css";
import { PiUserCircleFill } from "react-icons/pi";
import { Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    navigate('/register');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/users/login`, formData);
      localStorage.setItem("user", JSON.stringify(res.data));
      message.success("Login success!");
      setTimeout(() => {
        window.location.href = "/home";
      }, 500);
    } catch (error) {
      console.log(error);
      message.error("User not found!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div className="p-5 custom-bg ">
        <Form onSubmit={handleSubmit}>
          <div className="justify-content-center w-50 h-50 m-auto sign-in">
            <h5 className="sign text-center" id="first">
              SIGN IN
            </h5>
          </div>
          <div className="bg-custom text-center p-5" id="second">
            <PiUserCircleFill color="white" fontSize={100} />
            <div className="mb-2 mt-3">
              <Form.Control
                type="email"
                name = "email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="d-flex justify-content-between mb-2">
              <div>
                <input
                  type="checkbox"
                  className="custom-control custom-checkbox "
                  id="check"
                />
                <label htmlFor="check" className="custom-Form.Control-lable link">
                  Remember me
                </label>
              </div>
              <p className="text-right">
                <a href="" className="link">
                  Forgot your password?
                </a>
              </p>
            </div>
            <div className="d-grid">
              <button className="but rounded">LOGIN</button>
            </div>
            <p className="text">OR</p>
            <div className="d-grid">
              <button className="but rounded" onClick={handleClick}>CREATE AN ACCOUNT</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
