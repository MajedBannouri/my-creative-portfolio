// import pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs'
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import {Switch, Route, useLocation} from 'react-router-dom'
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()
  return (
    <div >
    <GlobalStyle></GlobalStyle>
    
      <Nav></Nav>
      <AnimatePresence exitBeforeEnter>
      <Switch Location={location} key={location.pathname}>
      <Route path="/" exact>
        <AboutUs/>
      </Route>
      <Route path="/my-work" exact>
        <MyWork></MyWork>
      </Route>
      <Route path="/my-work/:id">
        <MovieDetail></MovieDetail>
      </Route>
      <Route path="/contact-me">
        <ContactMe></ContactMe>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
