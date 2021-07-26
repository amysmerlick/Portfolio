import "./contactMe.css";
import React from 'react';

const ContactMe = () => {

    return (
        <section id="ContactMe" class="ContactMe container-fluid">
            <h4>Contact Me</h4>
            <p className="information">Email: amy@directinfusion.net</p>
            <p className="information">Phone: 570-259-0000</p>
            <a className="contactinfo" href="https://www.linkedin.com/in/amysmerlick/">LinkedIn</a>

            <a className="contactinfo" href="https://github.com/amysmerlick">GitHub</a>

            {/* <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
        </section>

        
    )
}

export default ContactMe