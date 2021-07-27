import './portfolio.css'
import Project from './project.js'

const Portfolio = () => {

    return (
        <section id="Portfolio" className="Portfolio">
                <h2>
                    <u>Portfolio</u>
                </h2>
                <p>Check out our most recent class projects!!</p>

                <div className="projectcontainer">
                        
                        <Project image="./Images/Horiseon Social Solution Services.png" appLink="https://amysmerlick.github.io/Horiseon/" name="Horiseon Refactor Assignment" repoLink="https://github.com/amysmerlick/Horiseon" />
                        <Project image="./Images/About Me.png" appLink="https://amysmerlick.github.io/prework-about-me" name="Prework Assignment" repoLink="https://github.com/amysmerlick/prework-about-me" />
                        <Project image="./Images/BottomDrawerPage.png" appLink="https://bottomdrawermarketplace.herokuapp.com/" name="Bottom Drawer" repoLink="https://github.com/amysmerlick/super-octo-funicular" />
                        <Project image="./Images/OpenRoad.png" appLink="https://github.com/amysmerlick/Open-Road-Travel-Agency" name="Open Road" repoLink="https://amysmerlick.github.io/Open-Road-Travel-Agency/" />
                        <Project image="./Images/Weather App (1).png" appLink="https://amysmerlick.github.io/WeatherTracker/" name="Weather Trackert" repoLink="https://github.com/amysmerlick/WeatherTracker" />
                        <Project image="./Images/workdayscheduler.png" appLink="https://amysmerlick.github.io/Work-Day-Scheduler/" name="Work Day Scheduler" repoLink="https://github.com/amysmerlick/Work-Day-Scheduler" />
                        
 
                        
                </div>
        </section>
    )

}

export default Portfolio