import React , {Component} from 'react';
import ReactDom from 'react-dom';
import CommentBox from './components/comment_box';
import CommentList from './components/comments_list';
import Comment from './components/comment';


ReactDom.render(<CommentBox/>,document.querySelector('.container'));
