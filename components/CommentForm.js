import {Form, Input, Button} from 'antd';
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';
import {ADD_COMMENT_REQUEST} from '../reducers/post';


const CommentForm = ({post}) => {
    const id = useSelector((state)=>state.user.me?.id);
    const [commentText, onChangeCommentText] =useInput('');
    const {addCommentDone} = useSelector((state)=> state.post);

    useEffect(()=>{
      if(addCommentDone){
        setText('');
      }
    },[addCommentDone]);

    const onSubmitComment = useCallback(()=>{
        console.log(post.id, commentText);
        dispatchEvent({
            type: ADD_COMMENT_REQUEST,
            data: {content: commentText, postId:post.id, userId, id}
        });
    },[commentText,id]);
    return(
        <Form onFinish={onSubmitComment}>
         <Form.Item style={{position:'relative', margin:0}}>
             <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
             <Button style={{position:'absolute', right:0, bottom:-40}} type="primary" htmlType="submit">삐약</Button>
         
         </Form.Item>
        </Form>
    );
}

CommentForm.propTypes ={
  post: PropTypes.object.isRequired,
};

export default CommentForm