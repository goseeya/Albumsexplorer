import styled from 'styled-components';

export const StyledCurrentUser = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  justify-content: space-between;
  align-items: center;
  border: none;
  margin-right: 10px;

    img {
      border-radius: 50%;
      width: 24px;
      height: 24px;
    }

    p {
      font-size: 14px;
      color: #000;
    }
`;
