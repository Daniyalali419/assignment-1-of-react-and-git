import './App.css';
import First from './Components/First';
import About from './Components/About';
import Work from './Components/Work'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route } from '@mui/icons-material';





function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
 <Route index element={<First/>}/>
 <Route path="About" element={ <About/>}/>
 <Route path="Work" element={  <Work/>}/>
 <Route path="Contact" element={ <Contact/>}/>
 <Route path="Footer" element={  <Footer/>}/>
 </BrowserRouter> */}
 <First/>
 <About/>
 <Work/>
 <Contact/>
 <Footer/>
    </div>
  );
}

export default App;
