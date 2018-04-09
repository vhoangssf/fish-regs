import React from 'react';
import { Well, Media } from 'react-bootstrap';

class Fish extends React.Component {
  render() {
    const { MockData } = this.props;

        let fishList = MockData.map(fish =>{
            return (
                <Well key={fish.id}>
                    <Media>
                        <Media.Left>
                        <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                        <Media.Heading>{ fish.name }</Media.Heading>
                        <b>Scientific Name:</b><span> { fish.scientificName }</span><br/>
                        <b>Size Limit:</b><span> { fish.size }</span><br/>
                        <b>Bag Limit:</b><span> { fish.bagLimit }</span><br/>
                        <b>Seasons :</b><span> { fish.seasons }</span><br/>
                        <b>Locations:</b><span> { fish.location }</span><br/>
                        </Media.Body>
                    </Media>
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

