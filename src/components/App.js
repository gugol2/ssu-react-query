import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import './App.css';
import Users from './Users';
import OtherUsers from './OtherUsers';
import UserForm from './UserForm';

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
