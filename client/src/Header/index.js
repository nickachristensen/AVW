import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Wrapper, LinkWrap, Title, Buttons, PortfolioButton, ContactButton, HeaderLogo, Content, P, FormTitle, Form, Button } from './Header.styles';
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
    
        emailjs.sendForm('service_y2hlkbf', 'template_za1nh1i', form.current, 'mBXf6gqh1i6oqSVd_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });setOpen(false);alert('Your email to Anna has been sent!');
      };

    return (
        <Wrapper img={BackgroundImg}>
        <LinkWrap>    
        <Link to= '/'>
        <HeaderLogo src={Logo} alt="homebackground"/>
        </Link>
        </LinkWrap>
        <Title>Anna VanWalsen</Title>
        <Buttons>
        <Link to= '/portfolio' style={{ textDecoration: 'none' }}>
        <PortfolioButton>Portfolio</PortfolioButton>
        </Link>
        <ContactButton onClick={() => setOpen((isOpen) => !isOpen)}>Contact</ContactButton>
        <Modal isOpen={isOpen} close={() => setOpen(false)}> 
            <Content>
                <FormTitle>Contact</FormTitle>
                <P>If you have questions about my work or are looking for me to create something amazing for you please fill out this form!</P>
                <Form ref={form} onSubmit={sendEmail}>
                    <label for="fname">First name: </label>
                    <input type="text" id="fname" name="fname" defaultValue="Jane" onChange={handleChange}></input>
                    <label for="lname">Last name: </label>
                    <input type="text" id="lname" name="lname" defaultValue="Doe" onChange={handleChange}></input>
                    <label for="email">Email: </label>
                    <input type="text" id="email" name="email" defaultValue="janedoe@gmail.com" onChange={handleChange}></input>
                    <label for="description">Description: </label>
                    <textarea id="description" name="description" defaultValue="Let me know what you need here!" rows="5" cols="40" onChange={handleChange}></textarea>
                    <Button type="submit" value="Submit">Submit</Button>
                </Form> 
            </Content>     
        </Modal>
        </Buttons>
        </Wrapper>
    );
    }

export default Header;