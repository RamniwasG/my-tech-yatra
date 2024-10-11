import './App.css';
import './global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import ResponsiveAppBar from './components/AppBar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <main>
        <MainContent />
      </main>
      <footer className='footer text-sm'>
        mytechyatra@2024
      </footer>
    </div>
  );
}

export default App;
