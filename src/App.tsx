import { lazy, Suspense, } from 'react';
import styled from '@emotion/styled';

import CardType1 from './components/CardType1';


const CreateUserPage = lazy(() => import("app1/CreateUserPage"));
const UsersPage = lazy(() => import("app1/UsersPage"));


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #242424;
`;


const App = () => {
  return (
    // <StyledApp>
    //   <CardType1 />
    // </StyledApp>

    <div>
      <h1>
        Hello here
      </h1>
      <Suspense fallback="Loading Material UI Dialog...">
        <CreateUserPage />
      </Suspense>
      <Suspense fallback="Loading Material UI Dialog...">
        <UsersPage
          testUser={{
            age: 51,
            name: 'dasdas',
          }}
        />
      </Suspense>
    </div>
  );
}

export default App;
