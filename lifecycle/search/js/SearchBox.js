class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.isFixed = this.isFixed.bind(this)
    this.setPosition = this.setPosition.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.setPosition)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.setPosition)
  }  

  render() {
    return <SearchBoxView  fixed={this.state.fixed} />
  }

  isFixed(){
    const element = document.querySelector('section.container')
    return element.getBoundingClientRect().top <= 0
  }

  setPosition(){
    this.setState({
      fixed:this.isFixed()
    })
  }

}
