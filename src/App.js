import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import Textarea from "./components/Textarea";

function App() {
    return (
        <>
            <Input bgColor="carrot" color="clouds" brdSize="3" brdRadius="8" brdColor="wisteria"/>
            <Textarea bgColor="wet asphalt" color="concrete" brdSize="5" brdRadius="10" brdColor="orange"/>
            <Button icon="user">Click me</Button>
            <Button icon="exclamation" bgColor="pomegranate">Don't click</Button>
            <Button icon="coffee" bgColor="belize hole" color="greenyellow">Are you sure?</Button>
        </>
    );
}

export default App;
