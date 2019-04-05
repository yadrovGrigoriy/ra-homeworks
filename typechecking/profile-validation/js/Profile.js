'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};



const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img:'./images/profile.jpg',
} 
Profile.propTypes= {
  first_name:PropTypes.string,
  last_name:PropTypes.string,
  img:PropTypes.string,
  url: (props, propName, componentName) => {
      if(!/^(https:\/\/)?(vk\.com)\/(id[0-9]+|[A-Za-z0-9_-]+)/.test(props[propName])){
          return new Error(`Не верно заполнен ${propName} в компоненте ${componentName}.`)
      }    
  },
  birthday: (props, propName, componentName) => {
    if(!props[propName])return
    if (!/\d{4}\-\d{2}\-\d{2}/.test(props[propName]) || Date.parse(props[propName]) > Date.now() ) {
      return new Error(`Не верно заполнен ${propName} в компоненте ${componentName} дата должна быть в формате YYYY-MM-DD  и меньше сегодняшнего дня.`)
    }  
  }


}