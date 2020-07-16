import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState } from 'react';
const FormPage = styled.div`
   width:30rem;
   margin: 10% auto;
   @media (max-width: 768px) {
    width:22rem;
     padding: 10px;
     margin: 20% auto;
   }

   #formBasicPassword, #formBasicEmail{
    display: inline;
    width:92%
   }
   .icon{
     display: inline-block;
     position: absolute;
    
   }

   i{
    font-size:18px;
    height: 37px;
    width: 36px;
    text-align:center;
    border-top-right-radius: 5px;
    padding: 8px;
    border-bottom-right-radius: 5px;
   }
   .input-danger{
       border-color:red;
   }
   .is-danger{
       color:red;
       font-size:15px;
   }

`;

const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [hidden, setHidden] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    let data = new FormData(e.target);
    const email = data.get('email');
    const password = data.get('password');
    let err = {};

    let emailRegex = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\.([a-zA-Z]{2,5})$");
    let pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/;
    if (!email) {
      err.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      err.email = 'Email address is invalid';
    }
    if (!password) {
      err.password = 'Password is required';
    } else if (!pwdRegex.test(password)) {
      err.password = 'Min 4 and Max 12 characters, at least one letter, one number and one special character';
    }
    setErrors(err);

    setTimeout(() => {
      if (Object.keys(err).length === 0) {
        alert(`Welcome ${email}`);
      }
    }, 500)


  }
  function toggleShow() {
    setHidden(!hidden);
  }

  return (
    <FormPage>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" autoComplete='off' placeholder="Enter email" name='email' className={errors.email && 'input-danger'} />
          {errors.email && (
            <p className="is-danger">{errors.email}</p>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={hidden ? "password" : "text"} placeholder="Password" name='password' className={errors.password && 'input-danger'} />
          <div className={'icon ' + (errors.password && 'input-danger')} onClick={() => toggleShow()}>
            {hidden ? <i className="fa fa-eye-slash" aria-hidden="true"></i> : <i className="fa fa-eye" aria-hidden="true"></i>}

          </div>
          {errors.password && (
            <p className="is-danger">{errors.password}</p>
          )}
        </Form.Group>
        <Button variant="primary" type="submit" className='loginSubmit'> Submit </Button>
      </Form>
    </FormPage>

  )
}

export default LoginPage;