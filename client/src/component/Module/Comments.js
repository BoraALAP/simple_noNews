import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCard from "../UI/CommentCard";

import styled from "styled-components";
import CommentForm from "./CommentForm";

const Style = styled.div`
  padding: 16px;
  box-shadow: ${props => props.theme.boxshadow};
  border-radius: ${props => props.theme.radius};
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Comments = props => {
  const { id } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const func = async () => {
      const res = await axios.get("http://localhost:8000/api/comments");
      const filtered = await res.data.filter(comment => comment.id === id);
      setComments([...filtered.reverse()]);
    };
    func();
    
    // eslink-disabled-next-line
  }, [comments, id]);

  return (
    <Style>
      <CommentForm id={id} />
      {comments.length > 0 && <h2>Comments</h2>}
      {comments.map(comment => (
        <CommentCard info={comment} key={comment._id} />
      ))}
    </Style>
  );
};

export default Comments;
