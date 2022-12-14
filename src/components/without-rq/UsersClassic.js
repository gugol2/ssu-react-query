import React from 'react';
import useUsersClassic from './useUsersClassic';

function UsersClassic(props) {

  const { data, status, errorMsg, setrefetch} = useUsersClassic()
 
  if (status === "loading") {
     return <span>Cargando usuarios</span>;
  }
 
  if (status === "error") {
     return <div>Error cargando usuarios: {errorMsg}</div>;
  }

  const handleRefetch = () => setrefetch(Math.random())
 
  return (
   <div>
      <ul>
         {data.map((user) => (
            <li key={user.id}>{user.email}</li>
         ))}
      </ul>
      
      <button onClick={handleRefetch}>Refrescar</button>
   </div>
  );
}

export default UsersClassic;
