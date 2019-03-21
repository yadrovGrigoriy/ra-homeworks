

const Listing = ({items}) => {
    return (
        <div className="item-list">
            {
                items.map(item => (
                    <ListingItem key={item.listing_id} item={item}/>
                ))
            }
        </div>
       
    )
}