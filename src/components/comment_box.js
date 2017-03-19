import React,{Component} from 'react';
import CryptoJS from 'crypto-js';
import CommentList from './comments_list';
import ReactDom from 'react-dom';
import FilterComment from './filter_comments';
import MD5 from 'js-md5';

class CommentBox extends Component {
  constructor(props) {
		super(props);
    this.filterCommet = this.filterCommet.bind(this);
		this.state = {data: []};
  }


  insertComment() {
    var oldState = this.state.data;
    var id = oldState.length + 2;
    var avatarUrl = "src/img/guest.jpg";
    var name = this.refs.name;
    var text = this.refs.text;

    if (text.value != "" && name.value !="" && this.ValidateEmail(name.value)) {

      var newState = oldState.push({
        "id": id,
         "avatarUrl": this.getHashCode(name.value),
         "name": name.value,
         "text": text.value
      });

      this.setState({data: this.state.data});

      name.value = "";
      text.value = "";
      this.hideError();

    }else {
      this.handleNotValidMail(name.value);
      this.handleEmptyMail(name.value);
      this.handleEmptyMsg(text.value);
   }
}

handleEmptyMsg(msg) {
  if (!msg) {
      this.refs.erro.style.display = "block";
 }else {
   this.refs.erro.style.display = "none";
 }
}

handleNotValidMail(email){
  if(!this.ValidateEmail(email)) {
    this.refs.notValidMail.style.display = "block";
  }else {
    this.refs.notValidMail.style.display = "none";
  }
}

handleEmptyMail(email) {
  if (!email) {
      this.refs.emptyMail.style.display = "block";
  }
  else {
      this.refs.emptyMail.style.display = "none";
  }
}

hideError(){
  this.refs.emptyMail.style.display = "none";
  this.refs.erro.style.display = "none";
  this.refs.notValidMail.style.display = "none";
}

getHashCode(url){
  return MD5(url);
}

ValidateEmail(mail)
  {
    if (/^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
    return (false)
}

filterCommet(filterText) {
  var AllComments = this.state.data;
  var filterComments = [];
  this.state.data.map(function(comment) {
    if(comment.name == filterText) {
      console.log('Need To Implement Filter Message');
    }
  });
}




  render() {
    return (
      <div className="comment-box">
         <div ref="commentForm" className="comment-form">
         <input ref="name" placeholder="Email" className="input-text"/>
           <textarea ref="text" placeholder="Message" className="textarea"></textarea>
            <div>
              <button onClick={this.insertComment.bind(this)} className="btn">Submit</button>
              <span className="erro" ref="erro">* The Comment field is mandatory ;)</span>
              <span className="erro" ref="emptyMail">* The Email field is mandatory ;)</span>
              <span className="erro" ref="notValidMail">* The Email is not Valid;)</span>
            </div>
        </div>
        <div>
          <input type="text" className="form-control" placeholder="Filter According to email..." onChange={event => this.filterCommet(event.target.value)}/>
          <CommentList comments={this.state.data}/>
          </div>



      </div>
    )
  }
}
export default CommentBox
