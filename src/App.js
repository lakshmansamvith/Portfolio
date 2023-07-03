import Home from './Components/Main';
import Projects from './Components/Projects';
import Header from './Components/Header'
import Footer from './Components/Footer'
import WorkExperiencePage from './Components/WorkExperience'
import EducationPage from './Components/Education';

function App() {
  return (
    <div className='App'>
    <Header/>
       {<Home />}
      {<EducationPage />}
        {<WorkExperiencePage />}
        {<Projects />}

      <Footer />
    </div>
  );
}

export default App;

