import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('name'),searchParams.get('age'));
  return (
    <div>Home</div>
  )
}

export default Home