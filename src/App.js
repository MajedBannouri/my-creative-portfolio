// import pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div >
    <GlobalStyle></GlobalStyle>
      <Nav></Nav>
      <Switch>
      <Route path="/" exact>
        <AboutUs/>
      </Route>
      <Route path="/my-work">
        <MyWork></MyWork>
      </Route>
      <Route path="/contact-me">
        <ContactMe></ContactMe>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
