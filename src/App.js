import './App.css';

import {Button, Input, Textarea} from './components/Form';

function App() {
    return (
        <>
            <Textarea bgColor="wet asphalt" color="concrete" brdSize="5" brdRadius="10" brdColor="orange"/>
            <Input bgColor="carrot" color="clouds" brdSize="3" brdRadius="8" brdColor="wisteria"/>
            <Button icon="user">Click me</Button>
            <Button icon="exclamation" bgColor="pomegranate">Don't click</Button>
            <Button icon="coffee" bgColor="belize hole" color="greenyellow">Are you sure?</Button>
        </>
    );
}

export default App;
