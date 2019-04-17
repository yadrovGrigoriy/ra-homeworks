
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/subscribtion" component={SubscribtionPage}/>
                <Route path="/article" component={ArticlePage}/>
                <Route path="/" component={Homepage}/>
            </Switch>
          </BrowserRouter>
        );
    }
}

