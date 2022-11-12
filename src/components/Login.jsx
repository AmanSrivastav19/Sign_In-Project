import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Sign_img } from "./Sign_img";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {

   const history = useNavigate()

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);
//   console.log(inpval);
  const getData = (e) => {
    //   console.log(e.target.value);
    const { value, name } = e.target;
    //    console.log(value,name);
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
      e.preventDefault();

    const getUserArr = localStorage.getItem("useryoutube")

    console.log(getUserArr);

    const {  email,  password } = inpval;
    if (email === "") {
      alert("Email Field is Required");
    } else if (!email.includes("@")) {
      alert("please enter valid email addres");
    } else if (password === "") {
      alert("Password Field is Required");
    } else if (password.length < 5) {
      alert("Paasword length  should be greater than 5 ");
    } else {
        if(getUserArr && getUserArr.length){
            const userdata = JSON.parse(getUserArr)
            const userlogin = userdata.filter((el,k)=>{
           return el.email=== email && el.password ===password
            })
            if(userlogin.length === 0){
               alert("Invalid Details")
            }else{
                // console.log("user login succesfully");

                localStorage.setItem("user_login",JSON.stringify(userlogin))
                history("/details")
            }
        } 
    }
    
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6 "> Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getData}
                  placeholder="Enter Email : "
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getData}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="dark"
                onClick={addData}
                style={{ backgroundColor: "rgb(67,185,127)" }}
                className="col-lg-6"
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account
              <span>
                <NavLink to="/ ">Sign Up</NavLink>
                
              </span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  );
};
