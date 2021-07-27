import AboutMe from './components/aboutMe.js'
import ContactMe from './components/contactMe.js'
import Portfolio from './components/portfolio.js'
import Resume from './components/resume.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import Navigation from  './components/navigation.js'

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
        <Header />
        <Navigation linkClickedCallback={linkClicked} visSection={visibleSection} />

        </main>



        <div id="Content">

          {visibleSection === 0 && <AboutMe />}
          {visibleSection === 1 && <Portfolio />}
          {visibleSection === 2 && <ContactMe />}
          {visibleSection === 3 && <Resume />}

        </div>

        <Footer />
      
    </div>
  );
}

export default App;
