import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { sendPost } from '../Redux/actions/publishPost';
import { useDispatch } from 'react-redux';

const Form = styled.form`
    max-width: 525px;
    padding: 15px;
    margin: 0 auto;
`;

const Input = styled(TextField)`
    .MuiInputBase-root {
        margin-bottom: 25px;
    }
    .MuiFormLabel-root.Mui-focused {
        color: black;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: black;
    }
`;

const Submit = styled.button`
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    background: black;
    font-size: 16px;
    max-width: 240px;
    padding: 12px 37px;
    text-align: center;
    margin-left: auto;
    margin-top: 3%;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const AddPost = (props) => {
    let isSubmitted = false;
    const [title, setTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const dispatch = useDispatch();
    const publishPostHandler = (e: ChangeEvent<HTMLFormElement>) => {
        isSubmitted = true;
        if (title.length > 0 && postBody.length > 0) {
            dispatch(sendPost(title, postBody));
        }
    };

    return (
        <Form noValidate autoComplete="off">
            <Input
                fullWidth={true}
                label="Post title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
                error={title.length < 1 && isSubmitted}
            />
            <Input
                label="Type the post..."
                multiline
                fullWidth={true}
                rows={6}
                onChange={(e) => setPostBody(e.target.value)}
                variant="outlined"
                error={postBody.length < 1 && isSubmitted}
                required
            />
            <Submit onClick={publishPostHandler}>Publish</Submit>
        </Form>
    );
};

export default AddPost;
