import './App.css';
import { Players } from './container/PlayerInfo.jsx/Players';
import { MoneyProvider } from './context/MoneyContext';
import { ToastProvider } from './component/Toast/Toast'
import { PlayerProvider } from './context/PlayerContext';
function App() {

  return (

    <div className="App">
      <MoneyProvider>
        <PlayerProvider>
        <ToastProvider>
        <Players />
        </ToastProvider>
        </PlayerProvider>
      </MoneyProvider>
    </div>
    
  );
}

export default App;
