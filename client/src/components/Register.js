import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./Register.css";
import { PiUserCircleFill } from "react-icons/pi";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { message } from "antd";
const BASE_URL = "http://localhost:5000";

const Login = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        email: '',
        password: ''
      });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    navigate('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const res = await axios.post(`${BASE_URL}/api/users/register` , formData)
        console.log(res);
        message.success('Registration successful!')
  
        setTimeout(() => {
          window.location.href='/login'
      }, 500);
      } catch (error) {
        console.log(error)
        message.error('Something went wrong')
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100">
      <div className="p-5 custom-bg ">
        <Form onSubmit={handleSubmit}>
          <div className="justify-content-center w-50 h-50 m-auto sign-in">
            <h5 className="sign text-center" id="first">
              SIGN UP
            </h5>
          </div>
          <div className="bg-custom text-center p-5" id="second">
            <PiUserCircleFill color="white" fontSize={100} />
            <div className="mb-2 mt-3">
              <Form.Control
                type="text"
                name = "name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>

            <div className="mb-2">
              <Form.Control
                type="date"
                name="dob"
                placeholder="Enter your DOB"
                value={formData.dob}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
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
            <div className="d-grid">
              <button className="but rounded">REGISTER </button>
            </div>
            <p className="text">OR</p>
            <div className="d-grid">
              <button className="but rounded" onClick={handleClick}>ALREADY HAVE AN ACCOUNT?</button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
