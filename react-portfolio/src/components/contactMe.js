import { useState } from 'react'

import "./contactMe.css";
import React from 'react';

const ContactMe = () => {

    let validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const [ errorMessage, setErrorMessage ] = useState("Error Message")
    return (
        <section className="ContactMe container-fluid">
            

            <form id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" onBlur={(e) => {

                        if (e.target.value.length === 0) {

                            setErrorMessage("You must enter a name before submitting")
                        } else {
                            setErrorMessage("")
                        }
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onBlur={(e) => {
                        if (e.target.value.length === 0) {

                            setErrorMessage("You must enter an email address before submitting")
                        } else {

                            if (validateEmail(e.target.value) === true) {
                                setErrorMessage("")
                            } else {
                                setErrorMessage("The email address you entered isn't valid")
                            }
                            
                        }
                    }} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" onBlur={(e) => {
                        if (e.target.value.length === 0) {

                            setErrorMessage("You must enter a message before submitting")
                        } else {
                            setErrorMessage("")
                        }
                    }}></textarea>
                </div>
                <div className="form-group">
                    {errorMessage}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>
                    
            <div className="my-info">
                <h4>Contact Me</h4>
                <p className="information">Email: amy@directinfusion.net</p>
                <p className="information">Phone: 570-259-0000</p>
                <a className="contactinfo" href="https://www.linkedin.com/in/amysmerlick/">LinkedIn</a>

                <a className="contactinfo" href="https://github.com/amysmerlick">GitHub</a>
            </div>
        </section>

        
    )
}

export default ContactMe