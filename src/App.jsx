

import './App.css'

import Home from './components/Home';

import About from './components/About'

import AboutClass from './components/AboutClass';

import LifeCycleComponent from './components/LifeCycleComponent';

import RenderingComponent from './components/RenderingComponent';

 import DesignComponent from './components/Home';

function App() {

 

  return (

    <>

    <About name="App component" work="Parent component"/>

    <AboutClass name="App component" work="Parent component"/>

    <LifeCycleComponent name="App component" work="Parent component"/>

    <RenderingComponent name="App component" work="Parent component"/>

    <DesignComponent name=""/>

    </>

  );

}

 

export default App;
