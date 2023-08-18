import { useState } from "react"
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container card signupcard center-align">
      <h1 className="font">Login</h1>
      <form>
        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="btn-large #1565c0 blue darken-3" type="submit" >Login
          <i className="material-icons right">forward</i>
        </button>

        <Link href="/signup"><h2 className="loginfont">Don't have an account?</h2></Link>
      </form>


    </div>
  )
}
