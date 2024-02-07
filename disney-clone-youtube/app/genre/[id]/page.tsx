import React from 'react'

type Props = {
    params:{
        id:string
    },
    searchParams:{
        genre:string
    }
}

const GenrePage = ({params:{id},searchParams:{genre}}:Props) => {
  return (
    <div>Welcome to search with id : {id} and genre : {genre}</div>
  )
}

export default GenrePage