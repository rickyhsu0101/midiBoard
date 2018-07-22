import React from 'react';
const PianoOption = props => {
  return (
    <div className = "row">
      <div className = "col-2"></div>
      <div className = "col-10">
        <div className = "container">
        <div className = "row">
          <div className = "col-1">
            <button className = "btn btn-primary" onClick = {props.addMeasure}>
              <i className = "material-icons" >add_circle </i>
            </button>
          </div>
          <div className = "col-1">
            <button className = "btn btn-primary" onClick = {props.removeMeasure}>
              <i className = "material-icons" >remove_circle </i>
            </button>
          </div>
          <div className = "col-1">
            <button className = "btn btn-primary" onClick = {props.start}>
              <i className = "material-icons" >play_circle_filled </i>
            </button>
          </div>
          <div className = "col-1">
            <button className = "btn btn-primary" onClick = {props.stop}>
              <i className = "material-icons" >pause_circle_filled </i>
            </button>
          </div>
        </div>
        </div>
      </div>
      <input type = "number"></input>
    </div>
  );
}
export default PianoOption;