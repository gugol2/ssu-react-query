import { useEffect, useState } from 'react';

async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users?page=2');
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

export default function useUsersClassic() {
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

  return {
    data, status, errorMsg, setrefetch
  }
}