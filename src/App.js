import { Fragment } from "react";
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
