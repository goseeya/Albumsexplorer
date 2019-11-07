import styled from 'styled-components';

export const StyledSearch = styled.div`
  input {
    width: 300px;
    @media (max-width: 500px) {
      width: 150px;
    }
  }

  button {
    width: 40px;
  }
`;
