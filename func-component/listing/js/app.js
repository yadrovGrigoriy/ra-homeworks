'use strict';


    fetch('https://neto-api.herokuapp.com/etsy')
    .then(res => res.json())
    .then(res => {
        
        ReactDOM.render(
            <Listing items={res} />,
            document.getElementById('root')
          );
    })





