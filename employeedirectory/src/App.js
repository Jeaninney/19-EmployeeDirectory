import React from "react";
import Header from "./components/Header";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SearchBox from "./components/SearchBox";
import employees from "./employees.json";

class App extends React.Component {
  state= {
    employees
  };


render() {
  return (
    <Wrapper>
      <Header>Employee Header</Header>
      <SearchBox/>
        
    </Wrapper>
  );

}
}

export default App;
