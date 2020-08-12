import React, { Component } from 'react';

class TodoBanner extends Component {
  state = {  }
  render() { 
    return ( 
      <>
       <h4 className="bg-primary text-white text-center p-2">
          Lista zadań użytkownika: {this.props.userName}
          (Liczba zadań: {this.props.tasks.filter(task => !task.done).length})
        </h4>
      </>
     );
  }
}
 
export default TodoBanner;