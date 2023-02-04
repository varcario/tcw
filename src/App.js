import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import Speakers from './components/speakers/speakers';
import News from './components/news/news';
import Contact from './components/contact/contact';
import Service from './components/service/service';
import Admin from './components/admin/admin';
import Officer from './components/admin/officer/officer';
import Committee from './components/admin/committee/committee';
import Speaker from './components/admin/speaker/speaker';
import Recording from './components/admin/recording/recording';
import Finance from './components/admin/finance/finance';
import Group from './components/admin/group/group';
class App extends Component{
  render(){
    return (
      <div>
        
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/service" element={<Service />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/officer" element={<Officer />} />
              <Route path="/admin/committee" element={<Committee />} />
              <Route path="/admin/speaker" element={<Speaker />} />
              <Route path="/admin/recording" element={<Recording />} />
              <Route path="/admin/finance" element={<Finance />} />
              <Route path="/admin/group" element={<Group />} />
            </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
