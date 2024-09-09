//import icons
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css'

//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';
import Header from './components/JSXFiles/Header';
import Sidebar from './components/JSXFiles/Sidebar';
import Main from './components/JSXFiles/Main';



function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <Main/>
    </div>
  );
}

export default App;
