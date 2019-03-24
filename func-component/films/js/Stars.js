'use strict';

const Stars = ({count}) => {
  const stars =[]
  if(count < 1 || count > 5 || isNaN(count)) count = null ;
  for(let i=0; i < count;i++){
    stars[i] = <li key={shortid.generate()} ><Star/></li>;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars}
    </ul>
  )          
}

Stars.defaultProps = {
  count:0
}
