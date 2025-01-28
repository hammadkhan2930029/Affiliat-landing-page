import React from 'react';
import './App.css';
import { Header } from './screens/header/header';
import { ScreenOne } from './screens/screenOne/screenOne';
import { ScreenTwo } from './screens/screenTwo/screenTwo';
import { ScreenThree } from './screens/screenThree/screenThree';
import { Newsletter } from './screens/newsletter/newsletter';
import { Footer } from './screens/footer/footer';

function App() {
 

  return (
    <>
   <Header/>
   <ScreenOne/>
   <ScreenTwo/>
   <ScreenThree/>
   <Newsletter/>
   <Footer/>
    </>
  )
}

export default App
