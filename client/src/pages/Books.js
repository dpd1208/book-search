import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    description: "",
    image: "",
    link: "",
    date: "",
    search: "",
    hasSearched: false
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: [], title: "", author: "", synopsis: "", description: "", image: "", link: "", date: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      console.log("Search: " + this.state.search)
      API.search(this.state.search)
      .then((res =>
        this.setState({ books: res.data.items, search: "", hasSearched:true,})
      )).then((res => console.log(this.state)
      )).catch(err => console.log(err));
    }
  };
  
  
  render() {
    if (!this.state.hasSearched) { 
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search (required)"
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Submit Search
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
        )
      };
      return (
          <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Search (required)"
                />
                <FormBtn
                  disabled={!(this.state.search)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Search
                </FormBtn>
              </form>
            </Col>
          </Row>
        <Row>
          <Col size="md-12">
          <List>
              <ListItem>
              <h1>{this.state.books[0].volumeInfo.title} by {this.state.books[0].volumeInfo.authors}</h1>
              <p>{this.state.books[0].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[1].volumeInfo.title} by {this.state.books[1].volumeInfo.authors}</h1>
              <p>{this.state.books[1].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
                <h1>{this.state.books[2].volumeInfo.title} by {this.state.books[2].volumeInfo.authors}</h1>
                <p>{this.state.books[2].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[3].volumeInfo.title} by {this.state.books[3].volumeInfo.authors}</h1>
              <p>{this.state.books[3].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[4].volumeInfo.title} by {this.state.books[4].volumeInfo.authors}</h1>
              <p>{this.state.books[4].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[5].volumeInfo.title} by {this.state.books[5].volumeInfo.authors}</h1>
              <p>{this.state.books[5].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[6].volumeInfo.title} by {this.state.books[6].volumeInfo.authors}</h1>
              <p>{this.state.books[6].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[7].volumeInfo.title} by {this.state.books[7].volumeInfo.authors}</h1>
              <p>{this.state.books[7].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
              <h1>{this.state.books[8].volumeInfo.title} by {this.state.books[8].volumeInfo.authors}</h1>
              <p>{this.state.books[8].volumeInfo.description}</p>
            </ListItem>
            <ListItem>
                <h1>{this.state.books[9].volumeInfo.title} by {this.state.books[9].volumeInfo.authors}</h1>
                <p>{this.state.books[9].volumeInfo.description}</p>
            </ListItem>
          </List>
          </Col>
        </Row>
        </Container> 
    );
  } 
}

export default Books;
