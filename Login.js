import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { useHistory } from "react-router-dom";
import { loginCredentials } from "./fixtures";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(false);

  const onChangeFieldEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onChangeFieldPassword = (e: any) => {
    setPassword(e.target.value);
  };

  const validationField = () => {
    if (
      email === loginCredentials.username &&
      password === loginCredentials.password
    ) {
      setToast(true);
    }
  };

  const history = useHistory();

  const redirect = () => {
    history.push("/table");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="login-form">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Enter your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={onChangeFieldEmail}
                  />
                  <MDBInput
                    label="Enter the password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    value={password}
                    onChange={onChangeFieldPassword}
                    onBlur={validationField}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn
                    color="cyan"
                    type="submit"
                    onClick={redirect}
                    disabled={!toast}
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
