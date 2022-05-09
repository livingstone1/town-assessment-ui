import './App.scss';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";

function App() {
    return (
        <div className="App">
            <div className='head'>
                <Header/>
            </div>
            <div className='page'>
                <AnalyticsPage/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
