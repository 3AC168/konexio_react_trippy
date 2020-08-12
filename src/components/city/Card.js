import React from 'react';
import Button from '../core/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
             name: '',
             source: 'http://via.placeholder.com/300x200',
             slug: ''         
            }
    }

    render() {
        const {
            name,
            slug
        } = this.props
        const src='http://localhost:3001/ + cities.source';
        return(
            <div>
                <Button 
                    onClick={() => {
                        this.props.onClick
                    }}>
                {name}                
                <img src={src} alt={'name'}/>
                {slug}
                </Button>
            </div>
        );
    }
}

export default Card; 
