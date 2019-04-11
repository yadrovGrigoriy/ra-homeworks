class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    // this.searchInput = '';
    this.state = { fixed: false };
    this.isFixed = this.isFixed.bind(this)
    this.setPosition = this.setPosition.bind(this)
  }
  componentDidMount() {
    this.offsetInput = this.searchInput.offsetTop;
    window.addEventListener('scroll', this.setPosition)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.setPosition)
  }  

  render() {
    return <SearchBoxView  fixed={this.state.fixed} searchRef={ el => this.searchInput = el} />
  }

  isFixed(){
    return this.offsetInput < window.scrollY
  }

  setPosition(){
    this.setState({
      fixed:this.isFixed()
    })
  }

}
