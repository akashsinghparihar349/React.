import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

  const {user} = useContext(UserContext)
  console.log("USER:", user)
  if(!user) return <div>Please login</div>
  return <div>Welcome {user.username}</div>
  

}
// console.log(user)

export default Profile
