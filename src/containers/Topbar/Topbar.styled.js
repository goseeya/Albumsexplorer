import styled from 'styled-components';

export const StyledTopbar = styled.div`
  top: 0;
  flex-direction: row;
  display: flex;
  background-color: white;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 56px;
  padding-top: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: 80px;
    padding-top: 40px;
  }
`;
