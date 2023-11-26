import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import {MetaCertification} from './components/MetaCertification';
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { ToastContainer } from 'react-toastify';
import { Projects } from "./components/Projects";
import {Footer} from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <AboutMe /> */}
      <Skills />
      <MetaCertification/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
