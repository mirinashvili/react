
import { Modal } from "react-bootstrap";
import { useFetchUsers } from "../../../UsersView/hooks/useFetchUsers";
import './UserDetalModal.css'

export function UserDetailModal({ show, payload, onHide, email, age, phone, eyeColor, gender }) {
  const { users } = useFetchUsers();

  
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Title>user id: {payload}</Modal.Title>
      <div className="userDetal"> <span>email:</span> {email}</div>
      <div className="userDetal"> <span>age: </span>{age}</div>
      <div className="userDetal"> <span>phone:</span> {phone}</div>
      <div className="userDetal"> <span>eyeColor:</span> {eyeColor}</div>
      <div className="userDetal"> <span>gender:</span> {gender}</div>
      
    </Modal>
  );
}
