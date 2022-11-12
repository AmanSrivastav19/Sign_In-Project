import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {

    const history = useNavigate()
  return (
    <>
      <div className="container">
        <div className="error d-flex flex-column justify-content-lg-center align-item-center">
            <h4> 404 Error! Page Not Found  </h4>
            <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Login Page</button>

        </div>
      </div>
    </>
  )
}
