
const ChartsSerie = (props) => {
    
    const { serieIndex, labels, series, serie, addClass, height  } = props
    
    
    return(
        <div
            className={addClass? `Charts--serie ${addClass}` : "Charts--serie"}
            key={ serieIndex }
            style={{ height: height || 'auto'  }}
        >
        
        <label> { series? series[serieIndex] : labels[serieIndex] } </label>

        { serie.map((item, itemIndex) => (
                 <ChartsItem {...props} itemIndex={itemIndex} item={item}/>	
            ))
        }    
        </div>
    
    )
   
};
