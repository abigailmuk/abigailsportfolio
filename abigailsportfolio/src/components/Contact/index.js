import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormButton, FormInput, FormInputMessage} from './ContactElements'


const ContactMe = () => {
  return (
    <Container>
        <FormWrap>
            <Icon to="/"><h1>Abigail Mukombero</h1> </Icon>
            <FormContent> 
                <Form action="#">
                    <FormH1>Contact Me</FormH1>
                        <FormLabel htmlFor='for'> First Name</FormLabel>
                        <FormInput type='firstname' required/>
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='lastname' required/> 
                        <FormLabel htmlFor='for'>Your Email</FormLabel>
                        <FormInput type='email' required/> 
                        <FormLabel htmlFor='for'>Your Number</FormLabel>
                        <FormInput type='telephone' required/>
                        <FormLabel htmlFor='for'>Subject</FormLabel>
                        <FormInput type='subject' /> 
                        <FormLabel htmlFor='for'>Message</FormLabel>
                        <FormInputMessage type='message' required/> 
                        <FormButton type='submit'> Send </FormButton>
                        
                        
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
  )
}

export default ContactMe