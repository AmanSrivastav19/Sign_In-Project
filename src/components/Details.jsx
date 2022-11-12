import React, { useEffect, useState } from 'react'
import { ToastBody } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export const Details = () => {


  const [logindata,setLogindata] = useState([]);
     const  history = useNavigate()

  const [show, setShow] = useState(false);


  var todayDate = new Date().toISOString().slice(0,10)
  // console.log(todayDate);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Birthday =()=>{
     const getUser = localStorage.getItem("user_login")
     if(getUser && getUser.length ){
      const user = JSON.parse(getUser)
      // console.log(user);
      setLogindata(user)

      const userbirth = logindata.map((el,k)=>{
         return el.date === todayDate
      })
      if(userbirth){
        setTimeout(()=>{
           console.log("ok");
           handleShow()
        },3000)
      }
     }
  }
  const userlogout=()=>{
    localStorage.removeItem("user_login")
    history("/")
  }
  useEffect(()=>{
     Birthday()
  },[])
  return (
    <>
    {
      logindata.length === 0? "Error":
      <>
      <h1>Details Page</h1>
      <h1>{logindata[0].name}</h1>
      <hr/>
      <Button onClick={userlogout}>LogOut</Button>
      {
         logindata[0].date===todayDate?
         <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
           <Modal.Title>{logindata[0].name}</Modal.Title>
         </Modal.Header>
         <Modal.Body>Wish You many many  return of th day</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
             Close
           </Button>
           <Button variant="primary" onClick={handleClose}>
             Save Changes
           </Button>
         </Modal.Footer>
       </Modal>:""
      }
     
      </>  
    }
    </>
  )
}
