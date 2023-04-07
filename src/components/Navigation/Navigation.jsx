import { Link } from "react-router-dom";
import './Navigation.css'

export function Navigation() {
  return (
    <div className="header">
    <Link className="link" to='/'>Home</Link>
    <Link className="link" to='/users'>Users</Link>
    <Link className="link" to='/products'>Products</Link>
    </div>
  )
  
}
