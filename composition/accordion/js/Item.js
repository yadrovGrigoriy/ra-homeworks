
class Item extends React.Component {
    state = {
        isOpen:false
    }

    toggle = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
     render() {
        const { title, article } = this.props
        return (
            <section className={this.state.isOpen? "section open" : "section"} >
            <button>toggle</button>
            <h3 className="sectionhead" onClick={this.toggle}>{title}</h3>
            <div className="articlewrap">
              <div className="article">{article}</div>
            </div>
          </section>
        );
    }
}