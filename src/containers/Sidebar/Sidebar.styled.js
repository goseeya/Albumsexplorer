import styled from 'styled-components';

export const StyledSidebar = styled.div`
  top: 66px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  min-height: 100px;
  overflow: hidden;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 10px;
    position: static;
  }
`;
