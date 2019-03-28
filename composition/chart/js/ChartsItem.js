
const ChartsItem = ({style, itemIndex, item, sortedSerie, serie, colors, addClass, max, sum, opacity, right, width }) => {
    var color = colors[itemIndex], style,
    size = item / (max || sum) * 100;

    style = {
        backgroundColor: color,
        opacity: opacity || item/max + .05,
        zIndex: item,
        height: size + '%',
    };

    if(right)style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
    if(width){
        style.width = size + '%';
        style.height = '';

    }

    return(
        <div
            className={addClass? `Charts--item ${addClass}`: "Charts--item "} 
            style={ style }
            key={ itemIndex }
       >
            <b style={{ color: color }}>{ item }</b>
        </div>
    )
}