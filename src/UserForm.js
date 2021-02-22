import React from 'react';
import {useMutation, useQueryClient} from 'react-query';

async function createUser() {
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Gerardo',
      job: 'Developer'
    }) 
  });
  if (!response.ok) {
    throw new Error('Error recuperando la lista de usuarios');
  }
  return response.json();
}

function UserForm(props) {
  const queryClient = useQueryClient();
  const mutation = useMutation(createUser, {
    onSettled: function() {
      console.log('final');
    },
    onSuccess: function(response) {
      queryClient.setQueryData('USERS', function(oldData) {
        return {
          ...oldData, 
          data: [
            ...oldData.data,
            {
              id: response.id,
              email: response.name,
              job: response.job
            }
          ]
        }
      })
      console.log('success');
    },
    onError: function(error) {
      console.log('error');
    }
  });

  function handleOnClick() {
    mutation.mutate();
  }

  return (
    <div>
      <button onClick={handleOnClick}>Crear</button>
    </div>
  );
}

export default UserForm;