import { Fragment } from "react";
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import StateProvider from './StateContext'

function App() {
  return (
    <Fragment>
      <StateProvider>
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </StateProvider>
    </Fragment>
  );
}

export default App;
