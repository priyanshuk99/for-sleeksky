import "./App.css"
import Header from './components/header';
import Logo from "./components/logo";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import Content from "./components/content";
import { CountProvider } from './countcontext'

function App() {

  return (
    <CountProvider>
      <div className='app'>
        <div className='col-1-row'>
          <div className='logo'>
            <Logo />
          </div>
          <div className='sidebar'>
            <SideBar />
          </div>
        </div>
        <div className='col-2-row'>
          <div className='header'>
            <Header />
          </div>
          <div className='content'>
            <Content />
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    </CountProvider>
  );
}

export default App;