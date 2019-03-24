'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        viewType:VIEW_MODULE,
        viewIsCard:true
    }
  }

  switchTypeView = () => {
    let viewType = '';
    if(this.state.viewType === VIEW_MODULE) viewType = VIEW_LIST;
    if(this.state.viewType === VIEW_LIST) viewType = VIEW_MODULE;
      this.setState({
          viewType,
          viewIsCard:!this.state.viewIsCard
      })
  }

  
  renderLayout(cardView) {
    if (cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, cardView)} />);
  }

  getShopItems(products, cardView) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }


  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.viewType}
            onSwitch={this.switchTypeView} />
        </div>
        {this.renderLayout(this.state.viewIsCard)}
      </div>
    );
  }

}


