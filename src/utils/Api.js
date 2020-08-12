import Config from '../Config';

class Api { 
    getHome() {
        const url = Config.host + "/api/home";
        console.log('Api#methodgetHomme url', url);
        fetch(url, {
            method: 'GET',            
        })
            .then(res => res.json())
            //.then(res => res.cities);
            .then(json => {
                console.log('json, json');
                const cities = json.cities;
                console.log('cities', cities); 
                return {cities} ;                           
            }); 
         
    }
}

export default new Api(); 