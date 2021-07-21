import AboutMe from './components/aboutMe.js'
import ContactMe from './components/contactMe.js'
import Portfolio from './components/portfolio.js'

import { useState } from 'react'

import './App.css';
import './reset.css'

function App() {

  const [visibleSection, setVisibleSection ] = useState(0)

  let linkClicked = (sectionIndex) => {

    setVisibleSection(sectionIndex)
  }
  return (
    <div className="App">

      <main>
        <header class="main-header">
            <h1 class="amy font-effect-shadow-multiple"> Amy Smerlick Student Portfolio</h1>
            <nav>
                <ul>
                    <li>
                        <a onClick={() => linkClicked(0) } className="nav-link font-effect-shadow-multiple">All About Me</a>
                    </li>
                    <li>
                        <a onClick={() => linkClicked(1) } className="nav-link font-effect-shadow-multiple" >Portfolio</a>
                    </li>
                    <li>
                        <a onClick={() => linkClicked(2) } className="nav-link font-effect-shadow-multiple">Contact Me</a>
                    </li>
                    <li>
                        <a className="nav-link font-effect-shadow-multiple" href="./Images/CondensedResume.png">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>

        </main>

        <div id="Content">

          {visibleSection === 0 && <AboutMe />}
          {visibleSection === 1 && <Portfolio />}
          {visibleSection === 2 && <ContactMe />}

        </div>
      
    </div>
  );
}

export default App;
