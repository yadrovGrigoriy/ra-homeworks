class Cart extends React.Component {

  shouldComponentUpdate(nextProps, ){
    return nextProps.isOpen !== this.props.isOpen || this.props.isOpen && nextProps.items !== this.props.items
  }
  
  render() {
    
    return (
      <CartView {...this.props} />
    );
  }

}
