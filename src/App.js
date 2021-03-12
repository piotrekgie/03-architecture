import './App.css';

import {Button, Input, Textarea} from './components/Form';
import Card from './components/Card';
import paella from './images/paella.jpg'

function App() {
    return (
        <>
            <Textarea
                bgColor="wet asphalt"
                color="concrete"
                brdSize="5"
                brdRadius="10"
                brdColor="orange"
            />
            <Input
                bgColor="carrot"
                color="clouds"
                brdSize="3"
                brdRadius="8"
                brdColor="wisteria"
            />
            <Button icon="user">Click me</Button>
            <Button icon="exclamation" bgColor="pomegranate">Don't click</Button>
            <Button icon="coffee" bgColor="belize hole" color="greenyellow">Are you sure?</Button>
            <div>
                <Card
                    title="Shrim and Chorizo Paella"
                    avatarText="R"
                    date="September 14, 2016"
                    intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                    content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...."
                    imageUrl={paella}
                    imageTitle="Image"
                    showMore
                />
            </div>
        </>
    );
}

export default App;
