'use strict';
const SortByMonthTable = Sort(MonthTable, 'SortByMonthTable');
const SortByYearTable = Sort(YearTable, 'SortByYearTable');
const SimpleSortTable = Sort(SortTable, 'SimpleSortTable');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <SortByMonthTable list={this.state.list} />
                <SortByYearTable list={this.state.list} /> 
                <SimpleSortTable list={this.state.list} /> 
            </div>
        );
    }
};