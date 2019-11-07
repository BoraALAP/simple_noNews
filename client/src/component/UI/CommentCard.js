import React, { useEffect, useState } from "react";
import styled from 'styled-components'


const Container = styled.div`
  padding: 16px;
  border-bottom: 3px solid ${props => props.theme.color.accent};
  p{
    margin: 0;
  }
`;

const CommentCard = props => {
  const [comment, setComment] = useState({});
  const [time, setTime] = useState({
    year: "",
    month: "",
    day: ""
  });

  useEffect(() => {
    setComment({ ...props.info });
    const func = async () => {
      const date = await new Date(comment.date);
      setTime({
        year: date.getFullYear().toString(),
        month: date.getMonth().toString(),
        day: date.getDate().toString()
      });
    };
    func();
    
  }, [comment.date, props.info]);

  return (
    <Container>
      <p>{comment.text}</p>
      <small>
        {time.day} - {time.month} - {time.year}
      </small>
    </Container>
  );
};

export default CommentCard;
