import React from 'react';
import { Well, Media, Modal } from 'react-bootstrap';
// import FishModal from './FishModal';
// import MockData from './MockData';

class Fish extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: false,
          activeModal: null
        };
      }
      handleClose() {
        this.setState({ show: false, activeModal: null });
      }
      handleShow(e, index) {
        this.setState({ show: true, activeModal: index });
      }
  render() {
    const { MockData } = this.props;
    

    let fishList = MockData.map((fish, index) =>{
        return (
            <Well key={fish.id}>
                <Media>
                    <Media.Left>
                    <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" onClick={e=>this.handleShow(e, index)}/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{ fish.name }</Media.Heading>
                        <b>Size Limit:</b><span> { fish.size }</span>
                    </Media.Body>
                </Media>

                <Modal show={this.state.activeModal === index} onHide={this.handleClose}>
                <Modal.Header closeButton>{fish.name}</Modal.Header>
                <Modal.Body>
                    <b>Scientific Name:</b><span> { fish.scientificName }</span><br/>
                    <b>Size Limit:</b><span> { fish.size }</span><br/>
                    <b>Bag Limit:</b><span> { fish.bagLimit }</span><br/>
                    <b>Seasons:</b><span> { fish.seasons }</span><br/>
                    <b>Locations:</b><span> { fish.location }</span><br/>
                    <b>Tags:</b><span> { fish.tags }</span><br/>
                </Modal.Body>
                </Modal>
            </Well>
        )
    })
    return (
      <div>
          { fishList }
      </div>
    );
  }
}

export default Fish;

