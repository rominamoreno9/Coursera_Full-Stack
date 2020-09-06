import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    renderDish(dish){
        return (
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        );
    }

    renderComments(comments){
        const commentLayout = comments.map((comment) => {
              return (
                <div key={comment.id}>
                  <li> {comment.comment} </li>
                  <li>
                    {" "}
                    {"-- " +
                      comment.author +
                      " , " +
                      comment.date}{" "}
                  </li>
                </div>
              );
            });

        if (comments != null) {

            return (
                <div>
                    <h4> Comments </h4> 
                    <ul className="list-unstyled">
                        {commentLayout}
                    </ul>
                </div>
            );
            
        }else{
            return (
                <div></div>
            );
        }
    }

    render() {

        if (this.props.selectedDish != null) {
          return (
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
              </div>
              <div className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.selectedDish.comments)}
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
    }
}

export default DishDetail;