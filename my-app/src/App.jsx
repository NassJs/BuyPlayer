import './App.css';
import { Player } from './container/PlayerInfo.jsx/Player';
import { MoneyProvider } from './context/MoneyContext';
function App() {


  return (
  <div className="App">
    <MoneyProvider>
    <Player />
    </MoneyProvider>
  </div>
  );
}

export default App;
