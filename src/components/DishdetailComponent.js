import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

class DishDetail extends React.Component{
    constructor(props) {
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(dish){

        const comment = dish.comments.map((dishComment) => {
            let date = new Date(dishComment.date);
            return (
                <li key={dishComment.id}>
                    <p>{dishComment.comment}</p>
                    <p>-- {dishComment.author}, {date.toLocaleDateString()}</p>
                </li>
            )

        })

        return (
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comment}
                </ul>
            </div>
        )

    }

    render() {
        if (this.props.dish != null){
            return(
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            )
        } else{
            return(
                <div></div>
            )
        }

    }
}

export default DishDetail;