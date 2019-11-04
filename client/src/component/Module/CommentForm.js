import React, { useState } from "react";
import { Submit } from "../UI/Button";
import styled from "styled-components";

import axios from "axios";

const Form = styled.form`
  display: grid;
  grid-gap: 0.875em;
`;

const Container = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

const CommentForm = props => {
  const [form, setForm] = useState("");

  const onChange = e => {
    setForm(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/comments", {
      text: form,
      id: props.id
    });
    setForm("");
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} autoComplete="off">
        <input
          type="text"
          name="text"
          value={form}
          onChange={onChange}
          id="comment_box"
        />
        <Submit text="Add Comment" />
      </Form>
    </Container>
  );
};

export default CommentForm;
