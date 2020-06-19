import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import employees from "./employees.json";
import Container from "./components/Container";
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from "react-bootstrap"; 

class App extends React.Component {
  //Setting this.state.employee to the employee json array
  state = {
    employees: [],
    userInput: "",
    results: []
  };
  


  searchName = (value) => {
    // // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.employees.filter(friend => friend.id !== id);
    // // // Set this.state.friends equal to the new friends array
    // this.setState({ employees });
    this.findName(this.state.employees,0,value);
    // console.log(this.state.userInput);
    // console.log(this.state.employees.indexOf(this.state.userInput) !==-1);
  };
  
  componentDidMount() {
    // API.getBaseBreedsList()
    this.setState({ employees: employees });
    this.setState({ results: employees });
    // .catch(err => console.log(err));
  }
  
  findName(names, index, letter) {

    var filteredNames = [];
    names.forEach(thisName => {
      if(thisName.name.startsWith(letter,0)) {
        filteredNames.push(thisName);
        console.log(thisName);
      }
    });
    console.log(filteredNames);
    this.setState({ results: filteredNames});
  }
  
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.searchName(value);
  };


  // filterEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

  // Map over this.state.employees and render a Employee component for each Employee object
  render() {
    return (
      <Wrapper>
        <Header>Employee Header</Header>
        <Container>
          <form className="search">
            <div className="form-group">
              <input
                value={this.state.userInput}
                // onChange={props.handleInputChange}
                name="userInput"
                type="text"
                className="form-control"
                placeholder="Search"
                id="employee"
                onChange={this.handleInputChange}
              />
            </div>
          </form>

          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}
  export default App;