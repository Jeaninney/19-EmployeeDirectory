import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./style.css";
import Container from "../Container";

function SearchResults(props) {
  return (
    <Container>
      <Row>
        {props.employees.map(employee => (
          <Col> <div className="col img-fluid"><img alt={employee.name} src={employee.image} /></div></Col>
          <Col> <div className="col"><img alt={employee.name} src={employee.image} /></div></Col>
          <Col className="col">{employee.id}</Col>
          <Col className="col">{employee.name}</Col>
          <Col className="col">{employee.phone}</Col>
          <Col className="col">{employee.email}</Col>
        ))}
      </Row>
    
    </Container>


    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="Dog" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default SearchResults;
