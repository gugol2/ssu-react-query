import {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import Users from './with-rq/Users';
import OtherUsers from './with-rq/OtherUsers';
import UserForm from './with-rq/UserForm';
import OldUsers from './without-rq/UsersClassic';
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: 0, // number of attemps
      // refetchOnWindowFocus: false
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

        <p>------------------</p>

        <button onClick={() => setShow((currentShow) => !currentShow)}>Mostrar la misma lista otra vez</button>
        {show && <OtherUsers />}

        <p>------------------</p>

        <UserForm />

        <h1>Lista de usuarios Old way</h1>


        <OldUsers />
      </div>
      <ReactQueryDevtools initialIsOpen={false}  />
    </QueryClientProvider>
  );
}

export default App;
