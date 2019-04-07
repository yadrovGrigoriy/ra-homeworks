



class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="tabs">
                    <nav className="tabs__items">
                        <NavLink exact className="tabs__item" activeClassName="tabs__item-active" activeStyle={{color:'green' }} to="/">Рефераты</NavLink>
                        <NavLink className="tabs__item" activeClassName="tabs__item-active" activeStyle={{color:'brown' }} to={`/creator/${'brown'}`}>Криэйтор</NavLink>
                        <NavLink className="tabs__item" activeClassName="tabs__item-active" activeStyle={{color:'red' }} to="/fortune">Гадалка</NavLink>
                    </nav>
                    <div className="tabs__content">
                        <Switch>
                            <Route path='/creator/:color?'  component={Creator} />
                            <Route path='/fortune'  component={Fortune} />
                            <Route path='/'  component={Essay} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

