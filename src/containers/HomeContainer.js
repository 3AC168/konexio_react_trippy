import React from 'react'; 

import Api from '../utils/Api.js';

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
    //        isLoading: true,
            cities: []        
        };
        console.log('#1')
    } 

    componentDidMount() {
       this.getHome = this.getHome.bind(this);
       getHome(cities) {
                this.setState ({
                    cities              // ou  cities: cities  ou  cities: json.cities
                });
                console.log('HomeContainer#componentDidMount this.seState.cities', this.setState.cities);
        }  
        
    }

    render() {
        // Manage state 
        //if (1) {
        //    return (
        //        <div />
        //    )
        //}

        return (
            <div
                className='container-fluid'
                style={{
                    fontFamily: 'Montserrat'
                }}>
                <div 
                    className='row'>
                    <div 
                        className={'col-lg-4 col-md-8 col-12'}>
                        <p>
                            Je vérifie que les 2 mots : voleur et <span style={{fontFamily: 'serif'}}>Voleur</span> ont une police d'écriture différente
                        </p>
                        <p>Hello Home</p>
                    </div>            
                    <div 
                        className='col-lg-8 col-md-4 col-12'>
                        Une autre phrase
                    </div>
                </div>                
            </div>
        );
    }
}

export default HomeContainer;






