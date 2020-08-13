import React, { Component } from 'react';

class VisibilityControl extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="form-check">
          <input type="checkbox" className="form-check-input"
          checked={this.props.isChecked} onChange={(e) => this.props.callback(e.target.checked)} />
          <label htmlFor="" className="form-check-label">
            Pokaż {this.props.description}
          </label>
        </div>
      </>
     );
  }
}
 
export default VisibilityControl;