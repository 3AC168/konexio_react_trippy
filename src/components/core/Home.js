import React from 'react';
import Card from '../city/Card.js';

class Home extends React.Component {
    render() {
        if (this.props.cities.length > 0) {
            return(
                <div>
                    Hello Home
                    {name}={this.props.cities[0].name}
                    {slug}={this.props.cites[0].slug}
                    {source}={this.props.cities[0].source}

                </div>
            )
        }
        return(
            <Card 
                {...Card}
            />
        );
    }
}

export default Home;