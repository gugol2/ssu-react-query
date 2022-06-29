import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import Users from './with-rq/Users';
import OtherUsers from './with-rq/OtherUsers';
import UserForm from './with-rq/UserForm';

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
        <button onClick={() => setShow(true)}>Mostrar</button>
        {show && <OtherUsers />}
        <UserForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
