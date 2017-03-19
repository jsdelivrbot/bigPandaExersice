import React,{Component} from 'react';

export default class Comment extends Component  {
  render() {
    return (
      <div className="comment">
        <div>
          <img src="https://www.gravatar.com/avatar/{this.props.avatarUrl}" className="avatar"/>
        </div>
        <div className="name">
          {this.props.name}
        </div>
        <div className="text">
          {this.props.children}
        </div>
      </div>
    )
  }
}
