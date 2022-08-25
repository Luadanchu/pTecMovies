import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FavList } from '../../context/FavouriteContext';
import addUser from '../../utils/addUser';
import './style.css'


const Login = () => {

  const {favItems} = useContext(FavList);
  const [formValues, setFormValues] = useState(' ');
  const [formErrors, setFormErrors] = useState([]);
  const [submit, setSubmit] = useState(false)
  const form = useRef();
  const nav = useNavigate();

  const newUser = (date, firstname, lastname, email, favourite) => {
    return {
      date: new Date().toLocaleString(),
      user: {
        firstname: firstname,
        lastname: lastname,
        email: email
      },
      favourite: favItems
    }
  }
  
  const sendEmail = () => {
    const addnewUser = newUser(new Date().toLocaleString(), formValues.firstname, formValues.lastname, formValues.email, favItems)
    addUser(favItems, addnewUser)
    nav('/home')
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

 const errors = {}
 const validateForm = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const rgx = /^[A-Z]+$/i;

    if(!values.firstname){
       errors.firstname = "First name is required"
    }else if(!rgx.test(values.firstname)){
       errors.firstname = "No valid format"
    }
    if(!values.lastname){
       errors.lastname = "Last name is required"
    }else if(!rgx.test(values.lastname)){
       errors.lastname = "No valid format"
    }
    if(!values.email){
       errors.email = "Email is required"
    } else if(!regex.test(values.email)){
       errors.email = "No valid email format"
    }
    return errors;
 }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validateForm(formValues))
    setSubmit(true)
  }
 
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && submit){
      sendEmail()
    }
  })

  return (
    <div className='contenGralLogin'>
        <form ref={form} onSubmit={sendEmail} >
          <h3 className='titLogin'>Login</h3>
          {!formErrors.firstname ?
            <input 
              className='infutForm' 
              type='text' 
              name='firstname' 
              placeholder='firstname' 
              value={formValues.firstname || ''} 
              onChange={handleChange} 
            />
          :
            <input 
            className='infutFormError' 
            type='text' 
            name='firstname' 
            placeholder={formErrors.firstname} 
            />
          }
          {!formErrors.lastname ?
            <input 
              className='infutForm' 
              type='text' 
              name='lastname' 
              placeholder='Lastname' 
              value={formValues.lastname || ''} 
              onChange={handleChange}
            />
          :
            <input 
            className='infutFormError' 
            type='text' 
            name='lastname'  
            placeholder={formErrors.lastname} 
            />
          }
          {!formErrors.email ?
            <input 
              className='infutForm' 
              type='email' 
              name='email' 
              placeholder='Email'
              value={formValues.email} 
              onChange={handleChange}  
            />
          :
            <input 
            className='infutFormError' 
            type='email' 
            name='email' 
            placeholder={formErrors.email} 
            />
          }
          {!formErrors.emailCheck ?
            <input 
              className='infutForm' 
              type='email' 
              name='emailCheck' 
              placeholder='Email'
              value={formValues.emailCheck} 
              onChange={handleChange}  
            />
          :
            <input 
              className='infutForm' 
              type='email' 
              name='emailCheck' 
              placeholder={formValues.email} 
            />
          }
          {formValues.email !== formValues.emailCheck ? 
            <p>
              Email doesn't match
            </p>
            : true
          }
          <input 
            className='btnLogin' 
            onClick={handleSubmit} 
            type='submit' 
           />
        </form>
    </div>
  )
}

export default Login