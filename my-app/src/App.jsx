import './App.css';
import { Players } from './container/PlayerInfo/Players';
import { MoneyProvider } from './context/MoneyContext';
import { ToastProvider } from './component/Toast/Toast'
import { PlayerProvider } from './context/PlayerContext';
import { CountProvider } from './context/Count';

function App() {

  return (

    <div className="App">
      <MoneyProvider>
          <CountProvider>
          <PlayerProvider>
          <ToastProvider>
          <Players />
          </ToastProvider>
          </PlayerProvider>
          </CountProvider>
      </MoneyProvider>
    </div>
    
  );
}

export default App;
