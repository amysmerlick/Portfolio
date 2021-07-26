import './aboutMe.css'

const AboutMe = () => {

    return (
        <section id="Biography" className="Biography container-fluid">
            {/* <h2><u>Biography</u></h2> */}
            <p>Hello World! My name is Amy Smerlick, a Full Stack web-developer student who is nearing the end of my course and ready to get out and explore this new career change. I am 
                excited to refine my skills with the right company and look forward to growing in this field. 
            </p>
            <div className="amyshead">
                <img src="./Images/Headshot.jpg" height="200" alt="headshot" class="headshot" />
            </div>
        </section>
    )


}


export default AboutMe