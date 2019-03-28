
class Charts extends React.Component {
    
  
    render(){
        const { data, addMainClass } = this.props
        let sum, sortedSerie;
        function compareNumbers (a, b) {
            return a - b;
          }
        function sumSortSerie(serie){
            sortedSerie = serie.slice(0);
            sum = serie.reduce((carry, current) => carry + current, 0);
                    sortedSerie.sort(compareNumbers);
        }
        
        return (
            <div className={addMainClass? `Charts ${addMainClass}` : "Charts"}>
                {
                    data.map((serie, serieIndex) => {
                        sumSortSerie(serie)
                        return <ChartsSerie
                                serieIndex={serieIndex}
                                serie={serie}
                                sortedSerie={sortedSerie} 
                                sum={sum}
                                {...this.props}
                            />
                    })
                }
            </div>
        )
    }
}

