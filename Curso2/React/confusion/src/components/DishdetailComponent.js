import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
  Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildOptions = this.buildOptions.bind(this);

    this.state = {
      modal: false
    };
  }

  handleSubmit(values) {
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    this.setState({modal: false});
  }

  buildOptions() {
    var arr = [];

    for (let i = 1; i <= 5; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }

    return arr; 
}

  render() {

    const toggle = () => this.setState({modal: !this.state.modal});

    return (
      <div>
        <Button type="button" outline color="secondary" onClick={toggle}>
          <span className="fa fa-pencil"></span> Submit Comment
            </Button>
        <Modal isOpen={this.state.modal} toggle={toggle}>
          <ModalHeader toggle={toggle}> Submit Comment </ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" id="rating" name="rating"
                  className="form-control">
                    { this.buildOptions() }
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      minLength: minLength(3), maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less'
                    }} />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment"
                    rows="6"
                    className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 12 }}>
                  <Button type="submit" color="primary">
                    Submit
                                    </Button>
                </Col>
              </Row>
            </LocalForm>
              </ModalBody>
        </Modal>
      </div>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  const commentLayout = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <p> {comment.comment} </p>
        <p> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p>
      </li>
    );
  });

  if (comments != null) {

    return (
      <div>
        <h4> Comments </h4>
        <ul className="list-unstyled">
          {commentLayout}
        </ul>
        <CommentForm dishId={dishId} postComment={postComment}/>
      </div>
    );

  } else {
    return (
      <div>
        <CommentForm dishId={dishId} postComment={postComment}/>
      </div>
    );
  }
}

const DishDetail = (props) => {

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} 
              postComment={props.postComment}
              dishId={props.dish.id} />
          </div>
        </div>
      </div>
    );
  } else 
    return <div></div>;
}

export default DishDetail;