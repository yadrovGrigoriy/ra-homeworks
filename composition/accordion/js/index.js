'use strict';
const articles = [
    {title:'Nulla do non id ', article:'Adipisicing irure voluptate incididunt dolor nisi consectetur ut ad qui officia laboris velit. Ex amet veniam irure adipisicing exercitation est dolor consectetur reprehenderit Lorem culpa dolore. Id et qui ut esse deserunt laboris enim ea veniam voluptate aliqua. Et magna ea nulla quis irure ad laboris excepteur adipisicing adipisicing tempor mollit. Sint duis cillum est veniam. Dolor quis duis quis elit adipisicing elit culpa eiusmod ipsum. Non anim adipisicing exercitation ea duis ex elit in excepteur laboris fugiat cupidatat tempor ea.'},
    {title:'Amet velit irure', article:'Veniam culpa aliqua deserunt quis occaecat adipisicing ad veniam est elit. Ullamco exercitation ad consectetur do labore elit enim nostrud mollit velit dolor velit officia laborum. Nisi minim eiusmod veniam cupidatat mollit aute. In commodo consequat ea sunt aute esse nulla velit sunt duis ut laborum anim.'},
    {title:'Deserunt quis', article:'Cupidatat enim id nisi excepteur est anim deserunt magna commodo est enim enim. Incididunt ipsum id irure tempor ad. Veniam veniam mollit magna ut non sunt aute commodo excepteur. Eiusmod laboris incididunt et mollit.'},
    {title:'In irure proident', article:'In irure proident minim voluptate officia sit sit adipisicing consequat amet in ipsum.'},

]




class App extends React.Component {
    
    render() {

        const { items, title } = this.props
        return (
            <main className="main">
                <h2 className="title">{title}</h2>
                {
                    items.map(item => <Item title={item.title} article={item.article}/>)
                }
            </main>
        );
    }
}

ReactDOM.render(<App items={articles} title={'React'}/>, document.getElementById('accordian'))