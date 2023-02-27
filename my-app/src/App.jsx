import './App.css';
import { Player } from './container/PlayerInfo.jsx/Player';
import { MoneyProvider } from './context/MoneyContext';
import { ToastProvider } from './component/Toast/Toast'
function App() {


  return (
    <div className="App">
      <MoneyProvider>
        <ToastProvider>
        <Player />
        </ToastProvider>
      </MoneyProvider>
    </div>
  );
}

export default App;
