import './App.css';

import Button from './components/Button';

function App() {
    return (
        <>
            <Button icon="user">Click me</Button>
            <Button icon="exclamation" bgColor="pomegranate">Don't click</Button>
            <Button icon="coffee" bgColor="belize hole" color="greenyellow">Are you sure?</Button>
        </>
    );
}

export default App;
