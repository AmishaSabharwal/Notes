import React from "react";
import reactDOM from 'react-dom';
import Index from './index'
import Heading from './Heading';
import Footer from './Footer';
import Notes from "./Notes";

function App(){
    return (<div>
        <Heading />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
       <Footer />
    </div>);
}
export default App;