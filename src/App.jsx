import './App.scss';
import { Message } from './component';

function App() {
  return (
    <div className="App">
      <Message text="Hy Henry" />
      <Message type="get_msg" text="Hello" />
      <Message text="How are you doing?" />
      <Message type="get_msg" text="Everything is super, and yours" />
    </div>
  );
}

export default App;
