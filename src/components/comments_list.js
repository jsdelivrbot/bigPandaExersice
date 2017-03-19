import React,{Component} from 'react';
import Comment from './comment';


export default class CommentList extends Component {
  render() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <Comment key={comment.id} name={comment.name} avatarUrl={comment.avatarUrl}>
          {comment.text}
          </Comment>
      )
  });
  return (
      <div>
        {commentNodes}
      </div>
    )
  }
}
