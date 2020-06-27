import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
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
    nameSort: "ASC",
    phoneSort: "ASC",
    userInput: "",
    results: []
  };



  searchName = (value) => {
    this.findName(this.state.employees, 0, value);
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
      var checkName = thisName.name;
      var lowerName = checkName.toLowerCase();
      if (lowerName.startsWith(letter.toLowerCase(), 0)) {
        // if(thisName.name.startsWith(letter,0)) {
        filteredNames.push(thisName);
        console.log(thisName);
      }
    });
    console.log(filteredNames);
    this.setState({ results: filteredNames });
  }



  ascCompare(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  descCompare(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    return 0;
  }

  sortByName = () => {
    let sortedEmployees = this.state.employees;
    sortedEmployees.sort();
    
    var sortOrder = this.state.nameSort;
    var items = this.state.employees;
    // sort by name
    items.sort(sortOrder === 'ASC' ? this.ascCompare : this.descCompare);
    console.log(items);
    if (sortOrder === 'ASC') {
      sortOrder = 'DESC';
    } else {
      sortOrder = 'ASC';
    }
    
    this.setState({
      employees: sortedEmployees,
      nameSort: sortOrder
    })
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
    this.searchName(value);
  };

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
                placeholder="Search by name"
                id="employee"
                onChange={this.handleInputChange}
                style={{ width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto" }}
              />

            </div>
          </form>
          <Buttons sort={this.sortByName} />
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}
export default App;