import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'ClassComponent'
    };
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default ClassComponent;
