/// <reference types="react-scripts" />


interface Props {
  testUser: {
    name: string,
    age: number,
  }
}


declare module 'app1/CreateUserPage' {
  const CreateUserPage: React.ComponentType;

  export default CreateUserPage;
}

declare module 'app1/UsersPage' {
  const UsersPage: React.ComponentType<Props>;

  export default UsersPage;
}
