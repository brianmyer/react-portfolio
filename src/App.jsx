// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className='vh-100 custom-background'>
      <Header className='vh-20'/>
      <main className="mx-3 vh-70">
        <Outlet />
      </main>
      <Footer className='vh-10'/>
    </div>
  );
}

export default App;
