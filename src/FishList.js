import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Media } from 'react-bootstrap';
import MockData from './MockData';

class FishList extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading>{MockData[0].name}</Media.Heading>
                            <p>
                                Size Limit: 14" Bag Limit: 5
      </p>
                        </Media.Body>
                    </Media>
                </ListGroupItem>


                <ListGroupItem>Yellowtail</ListGroupItem>
                <ListGroupItem>BlueFin</ListGroupItem>
            </ListGroup>
        );
    }
}

export default FishList;