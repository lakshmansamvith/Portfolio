import Home from './Components/Main';
import Projects from './Components/Projects';
import Header from './Components/Header'
import Footer from './Components/Footer'
import TimeLine from './Components/Timeline'

function App() {
  return (
    <div className='App'>
    <Header/>
       {<Home />}
        {<TimeLine/>}
        {<Projects />}

      <Footer />
    </div>
  );
}

export default App;

