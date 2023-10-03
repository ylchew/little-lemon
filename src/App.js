import { Fragment } from "react";
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import {StateProvider} from './StateContext'
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <Fragment>
      <ChakraProvider>
      <StateProvider>
        <Header></Header>
        <Nav></Nav>
        <Main></Main>
        <Footer></Footer>
      </StateProvider>
      </ChakraProvider>
    </Fragment>
  );
}

export default App;
