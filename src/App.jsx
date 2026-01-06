import React from 'react'
import Navbar from './components/Navbar/';
import Main from './components/ui/Main';
import Info from './components/ui/Info';
import Sulfat from './components/ui/Sulfat';
import Howtouse from './components/ui/Howtouse';
import Howtobuy from './components/ui/Howtobuy';
import Gimnastic from './components/ui/Gimnastic';
import Moreinfo from './components/ui/Moreinfo';
import Informationauthor from './components/ui/Informationauthor';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Info/>
      <Sulfat/>
      <Howtouse/>
      <Howtobuy/>
      <Gimnastic/>
      <Moreinfo/>
      <Informationauthor/>
      <Footer/>
    </div>
  )
}

export default App
