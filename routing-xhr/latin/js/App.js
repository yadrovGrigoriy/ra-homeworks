class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route  path="/">
              <Homepage />
            </Route>
            <Route path="/article/:id" component={Story} />
          </Switch>
        </div>
      </Router>
    );
  }
};