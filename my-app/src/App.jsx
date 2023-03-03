import './App.css';
import { MoneyProvider } from './context/MoneyContext';
import { ToastProvider } from './component/Toast/Toast'
import { PlayerProvider } from './context/PlayerContext';
import { CountProvider } from './context/Count';
import { Router } from './router/Router';

function App() {

  return (

    <div className="App">
      <MoneyProvider>
          <CountProvider>
          <PlayerProvider>
          <ToastProvider>
          <Router/>
          </ToastProvider>
          </PlayerProvider>
          </CountProvider>
      </MoneyProvider>
   
    </div>
    
  );
}

export default App;
