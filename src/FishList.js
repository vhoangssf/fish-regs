import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Media, Modal, Button } from 'react-bootstrap';
import MockData from './MockData';

class FishList extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
        console.log("fish clicked");
    }

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{MockData[0].name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Scientific Name</h4>
                        <p>{MockData[0].scientificName}</p>
                        <h4>Size Limit</h4>
                        <p>{MockData[0].size}</p>
                        <h4>Bag Limit</h4>
                        <p>{MockData[0].bagLimit}</p>
                        <h4>Seasons</h4>
                        <p>{MockData[0].seasons}</p>
                        <h4>Locations</h4>
                        <p>{MockData[0].location}</p>
                        
                        <hr />

                        <h4>Description</h4>
                        <p>{MockData[0].description}</p>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <ListGroup>
                    <ListGroupItem onClick={this.handleShow}>
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
            </div>
        );
    }
}

export default FishList;