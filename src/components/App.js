import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import Users from './with-rq/Users';
import OtherUsers from './with-rq/OtherUsers';
import UserForm from './with-rq/UserForm';
import OldUsers from './without-rq/OldUsers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    },
  },
});

function App() {
  const [show, setShow] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Lista de usuarios</h1>
        <Users />
        <OldUsers />

        <p>------------------</p>

        <button onClick={() => setShow(true)}>Mostrar la misma lista otra vez</button>
        {show && <OtherUsers />}

        <p>------------------</p>

        <UserForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
