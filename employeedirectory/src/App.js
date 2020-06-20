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
    this.findName(this.state.employees, 0, value);
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
    sortedEmployees.sort()


    var sortOrder = "ASC";
    var items = this.state.employees

    items.sort(sortOrder === 'ASC' ? this.ascCompare : this.descCompare);
    console.log(items);

    this.setState({
      employees: sortedEmployees
    })
  }

  // filterEmployee = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const employees = this.state.employees.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ employees });
  // };

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
                style={{ width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto" }}
              />

            </div>
          </form>
          <div>
            <div className="row">
              <div className="col"></div>
              <div className="col"><button className="card-btn" onClick={this.sortByName}>Name</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByName}>Phone</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByName}>Email</button></div>
              <div className="col"><button className="card-btn" onClick={this.sortByName}>DOB</button></div>
            </div>
          </div>
          <SearchResults employees={this.state.results} />
        </Container>
      </Wrapper>
    );
  }
}
export default App;