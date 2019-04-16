'use strict';
const SortByMonthTable = Sort(MonthTable, 'byMonth');
const SortByYearTable = Sort(YearTable, 'byYear');
const SortBySimpleSortTable = Sort(SortTable, 'simlpeSort');

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
                <SortBySimpleSortTable list={this.state.list} /> 
            </div>
        );
    }
};