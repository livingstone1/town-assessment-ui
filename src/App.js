import logo from './logo.svg';
import './App.css';
import {Header} from "./component/header/Header";
import {DropdownCustom} from "./component/dropdown/DropdownCustom";

function App() {
    return (
        <div className="App">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"/>
            </head>

            <DropdownCustom/>
        </div>
    );
}

export default App;
