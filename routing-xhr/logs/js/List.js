



class List extends React.Component {
    render() {
        return (
            <div>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Текущие данные</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/archive">Архив</Link>
                </li>
              </ul>
            {this.props.children}
            </div>  
        );
    }
}

