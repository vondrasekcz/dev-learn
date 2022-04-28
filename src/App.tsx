import styled from '@emotion/styled';

import CardType1 from './components/CardType1';


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #242424;
`;


const App = () => {
  return (
    <StyledApp>
      <CardType1 />
    </StyledApp>
  );
}

export default App;
