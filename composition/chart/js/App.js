function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

class App extends React.Component {
	
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels } = this.state;
		const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

		return (
			<section>
				<Charts
					 {...this.state}
					 height={250}
					 max={max}/>
					
				<Charts
					{...this.state}
					height={250} 
					opacity={1} 
					addClass={'stacked'}
				/>
        
			  <Charts 
					{...this.state}
					height={250} 
					max={max}
					addClass={'layered'}
					right={true}
				/>
				<Charts
					{...this.state}
					max={max} 
					width={true}
					addMainClass={'horizontal'} />
				<Legend labels={labels} colors={colors}/>		
			</section>
		);
	}
}
