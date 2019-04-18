class Logs extends React.Component {
  render() {
    const { logs } = this.props;

    return (
      <Router >
          <List>
            <Switch>
              <Route exact path="/">
                <Current logs={logs} />
              </Route>
              <Route path="/archive">
                <Archive logs={logs} />
              </Route>
            </Switch>
          </List>
      </Router>
    );
  }
};

const App = withFetcher({
    url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=50',
    collName: 'logs',
})(Logs)