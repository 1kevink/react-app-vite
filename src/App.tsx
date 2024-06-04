import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  useEffect(() => {}, []);

  return <h1>Hello World</h1>;
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrappedApp;
