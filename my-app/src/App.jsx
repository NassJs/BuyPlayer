import './App.css';
import { Player } from './container/PlayerInfo.jsx/Player';
import { MoneyProvider } from './context/MoneyContext';
import { ToastProvider } from './component/Toast/Toast'
import { PlayerProvider } from './context/PlayerContext';
function App() {


  return (
    <div className="App">
      <MoneyProvider>
        <PlayerProvider>
        <ToastProvider>
        <Player />
        </ToastProvider>
        </PlayerProvider>
      </MoneyProvider>
    </div>
  );
}

export default App;
