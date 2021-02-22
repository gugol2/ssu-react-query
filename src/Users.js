import React from 'react';
import useUsers from './useUsers';

function Users(props) {
  const query = useUsers();
  if (query.isLoading) {
    return <div>Cargando usuarios</div>;
  }

  if (query.isError) {
    return <div>Error cargando usuarios: {query.error?.message}</div>;
  }

  return (
    <div>
      <ul>
        {query.data.data.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <button onClick={query.refetch}>Refrescar</button>
    </div>
  );
}

export default Users;
