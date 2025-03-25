// import { useEffect } from 'react';
import './App.css';
import './global.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ToastContainer } from 'react-toastify';
import ResponsiveAppBar from './components/AppBar';
import MainContent from './components/MainContent';
// import API from './apis';

function App() {

  return ( <>
    <ToastContainer />
    <div className="App">
      <ResponsiveAppBar />
      <main>
        <MainContent />
      </main>
      <footer className='footer text-sm'>
        mytechyatra@2024
      </footer>
    </div>
    </>
  );
}

export default App;
