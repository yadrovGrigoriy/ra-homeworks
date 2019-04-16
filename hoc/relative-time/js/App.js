'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2019-04-16 13:24:00'
                },
                {
                    url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2019-04-16 13:00:00'
                },
                {
                    url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2019-04-16 12:16:00'
                },
                {
                    url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2019-04-14 23:16:00'
                },
                {
                    url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2018-01-01 16:17:00'
                },
                {
                    url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
                    date: '2017-12-02 05:24:00'
                },
            ]
        };
    }

    render() {
        return (
            <ListVideos list={this.state.list} />
        );
    }
}