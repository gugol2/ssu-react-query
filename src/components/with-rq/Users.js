import React from 'react';
import useUsers from './useUsers';

function Users(props) {
  const {isLoading, data, error, isError, refetch} = useUsers();
  
  if (isLoading) {
    return <div>Cargando usuarios</div>;
  }

  if (isError) {
    return <div>Error cargando usuarios: {error?.message}</div>;
  }

  return (
    <div>
      <ul>
        {data.data.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refrescar</button>
    </div>
  );
}

export default Users;
