import React, { useEffect, useState } from 'react';

async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users?page=2');
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

function OldUsers(props) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [refetch, setrefetch] = useState(0)
 
  useEffect(() => {
     async function manageRequest() {
        setStatus("loading");
        try {
           const usersData = await fetchUsers();
           setData(usersData.data);
           setStatus("success");
        } catch (e) {
           setStatus("failed");
           setErrorMsg(e.msg);
        }
     }
     manageRequest();
  }, [refetch]);
 
  if (status === "loading") {
     return <span>Cargando usuarios</span>;
  }
 
  if (status === "error") {
     return <div>Error cargando usuarios: {errorMsg}</div>;
  }

  const handleRefetch = () => setrefetch(Math.random())
 
  return (
     <div className="list-wrapper">
        <div>Old way</div>
        {data.map((user) => (
           <li key={user.id}>{user.email}</li>
        ))}
      <button onClick={handleRefetch}>Refrescar</button>

     </div>
  );
}

export default OldUsers;
