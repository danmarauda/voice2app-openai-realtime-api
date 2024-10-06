import { ConsolePage } from './pages/ConsolePage';
import './App.scss';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div data-component="App">
      <Analytics />
      <ConsolePage />
    </div>
  );
}

export default App;
