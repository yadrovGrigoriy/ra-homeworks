'use strict';

const HexInput = props => {
  
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <input
      value={props.value}
      onChange={handleChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
