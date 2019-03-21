

const ListingItem = ({item}) => {


    function cutstring( text, limit) {
        if( text.length <= limit) {
            return text;
        } 
        return text.slice( 0, limit) + "...";
      }


    function currency(currencyCode, price){
        let currency = '';

        if(currencyCode === "USD") currency = String.fromCharCode(36) + price
        else if(currencyCode === "EUR") currency = String.fromCharCode(8364) + price
        else currency = price + currencyCode;

        return currency
    }  

    function quantity(quantity){
        if(quantity <= 10) return "item-quantity level-low"
        if(quantity <= 20) return "item-quantity level-medium"
        if(quantity > 20) return "item-quantity level-high"
    }
    
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{cutstring(item.title, 50)}</p>
                <p className="item-price">
                    {currency(item.currency_code, item.price)}
                </p>
                <p className={quantity(item.quantity)}>{item.quantity} left</p>
            </div>
        </div>
    );
};

