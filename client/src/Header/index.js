import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Wrapper, Title, Buttons, ContactButton, HeaderLogo } from './Header.styles';
import Logo from "../img/logoWithMoon.PNG"
import BackgroundImg from '../img/Background.JPG'
import Modal from "../Modal";



const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        description: '',
      });

      function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4y7tc4j', 'template_tq5o7s6', form.current, 'user_N5u7K1vJl8lp6ZnSpwHm1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });setOpen(false);alert('Your email to Anna has been sent!');
      };

    return (
        <Wrapper img={BackgroundImg}>
        <Link to= '/'>
        <HeaderLogo src={Logo} alt="homebackground"/>
        </Link>
        <Title>Anna VanWalsen</Title>
        <Buttons>
        <Link to= '/portfolio'>
        Portfolio
        </Link>
        <ContactButton onClick={() => setOpen((isOpen) => !isOpen)}>Contact</ContactButton>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <div>
                <h1>Contact</h1>
                <p>If you have questions about my work or are looking for me to create something amazing for you please fill out this form!</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label for="fname">First name: </label>
                    <input type="text" id="fname" name="fname" defaultValue="Jane" onChange={handleChange}></input>
                    <label for="lname">Last name: </label>
                    <input type="text" id="lname" name="lname" defaultValue="Doe" onChange={handleChange}></input>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" defaultValue="janedoe@gmail.com" onChange={handleChange}></input>
                    <label for="description">Description: </label>
                    <textarea id="description" name="description" defaultValue="Let me know what you need here!" rows="5" cols="40" onChange={handleChange}></textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form> 
            </div>     
        </Modal>
        </Buttons>
        </Wrapper>
    );
    }

export default Header;