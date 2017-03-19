import React, {Component} from 'react';

class FilterComment extends Component  {

  render() {
    return (
    <div className="filterwidth">
      <span classNames="glyphicon glyphicon-search"></span>
      <input type="text" className="form-control" placeholder="Filter Comments.."/>
    </div>
    );
  }


}

export default FilterComment
