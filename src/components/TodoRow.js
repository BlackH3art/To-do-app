import React, { Component } from 'react';

class TodoRow extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <tr>
          <td>{this.props.item.action}</td>
          <td>
            <input type="checkbox" checked={this.props.item.done} onChange={() => this.props.callback(this.props.item)}/>
          </td>
        </tr>
      </>
     );
  }
}
 
export default TodoRow;