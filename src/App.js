import Home from './Main';
import Projects from './Project';
import Header from './Header'
import Footer from './Footer'
import WorkExperiencePage from './WorkExperience'
import EducationPage from './Education';

function App() {
  return (
    <div className='App'>
    <Header/>
    <br/>
    <Home/>
    <EducationPage/>
    <WorkExperiencePage/>
    <Projects/>
    <Footer/>

    </div>
  );
}

export default App;

