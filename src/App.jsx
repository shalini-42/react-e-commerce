import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer/footer';

import Navbar from './components/Navbar/Navbar';


import HomePage from './pages/Home/homepage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/About/ContactPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>
        <HomePage />
        
        {/* <ContactPage /> */}
       
      </main>
      <Footer />
      </>
  )
}

export default App;
