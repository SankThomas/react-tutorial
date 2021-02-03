import React, { useState, useEffect } from 'react'

const FetchUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // promises
    // async, await
    // tilde
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users')
      const users = await response.json()
      setUsers(users)
      console.log(users)
    }

    fetchData()
  }, [])

  return (
    <div className="main">
      {users.map((user) => {
        const { login, id, avatar_url, html_url } = user

        return (
          <div key={id} className="profile">
            <img src={avatar_url} alt="" />
            <h2>{login}</h2>
            <a href={html_url}>Profile</a>
          </div>
        )
      })}
    </div>
  )
}

export default FetchUsers
