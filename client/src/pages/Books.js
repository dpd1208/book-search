import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SaveBtn from "../components/SaveBtn";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
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
        this.setState({ books: [], title: "", author: "", description: "", image: "", link: ""})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveBook = id => {
    API.saveBook( 
      {
        title: this.state.title,
        author: this.state.author,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      })
      .then(res => alert(this.state.title + " saved to favorites"))
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
          {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                        <h1>{book.volumeInfo.title} by {book.volumeInfo.authors}</h1>
                        <p>{book.volumeInfo.description}</p>
                  <SaveBtn onClick={() => 
                    this.setState({
                        title: book.volumeInfo.title, 
                        author: book.volumeInfo.authors, 
                        description: book.volumeInfo.description, 
                        image: book.volumeInfo.imageLinks.thumbnail, 
                        link: book.volumeInfo.infoLink },
                        () => {
                          this.saveBook(book.id)
                        })
                      }/>
                  </ListItem>
                  ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      ) 
    };
  }
export default Books;
