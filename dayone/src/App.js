import React from 'react';
import Welcome from './components/Welcome';
import Button from './components/Button';
import './index.css'
function App() {
  return(
    <>
    <Welcome/>
    <div className="box">
    <Button buttonText="Good Morning"/>
    <Button buttonText="Good Afternon"/>
    <Button buttonText="Good evening"/>
    <Button buttonText="Good Night"/>
    </div>
    </>
  );
}

export default App;
