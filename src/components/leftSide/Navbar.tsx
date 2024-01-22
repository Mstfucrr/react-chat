import React from 'react'
import { IChatUser } from '@/types/Type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchApiTest } from '@/services/Api.service'

const Navbar = () => {
  const myAccount: IChatUser = {
    uid: 1,
    name: 'Mustafa Uçar',
    photoURL: 'https://avatars.githubusercontent.com/u/48890162?v=4'
  }
  // Access the client
  const queryClient = useQueryClient()
  // Queries

  // const postTodos = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       title: 'fssoo',
  //       body: 'bar',
  //       userId: 1
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //   return res.json()
  // }

  // const query = useQuery({ queryKey: ['todos'], queryFn: postTodos })

  // const mutation = useMutation({
  //   mutationFn: postTodos,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['todos'] })
  //   }
  // })

  // feth api test fetchApiTest()
  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchApiTest(),
    queryKey: ['todos']
  })

  const addData = () => {
    // mutation.mutate()
    // console.log(query.data)
  }

  const getData = () => {
    console.log(data)
  }

  return (
    <div className='flex w-full flex-row items-center justify-between rounded-tl-xl bg-purple-800 px-3 py-6'>
      {/* leftside Navbar logo and account  */}
      <h1 className='text-md m-0 font-semibold text-red-200'>
        <span className='mr-1 border px-2 font-bold text-primary'>Chat</span>
      </h1>

      <div className='flex flex-row items-center'>
        <img src={myAccount.photoURL} alt='my account' className='h-10 w-10 rounded-full' />
        <span className='ml-2 text-xs font-semibold text-red-100'>{myAccount.name}</span>
      </div>
    </div>
  )
}

export default Navbar
