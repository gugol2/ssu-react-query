import {useQuery} from 'react-query';

async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users?page=2');
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

export default function useUsers() {
  return useQuery('USERS', fetchUsers, {
    staleTime: 5000, // 'Infinity' is a valid value if we want forever cache
    notifyOnChangePropsExclusions: ['isStale'],
  });
}