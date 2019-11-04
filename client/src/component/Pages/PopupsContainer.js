import React from "react";

import styled from "styled-components";

const PopupsContainer = ({children, show}) => {
  const Container = styled.div``;

  return (
    <Container className={`popUp ${show ? "active" : "" }`}>
      {children}
    </Container>
  )
}

export default PopupsContainer
