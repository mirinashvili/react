import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { UserDetailModal } from "./components/UserDetailModal/UserDetailModal";
import { useFetchUsers } from "./hooks/useFetchUsers";
import './UserView.css'

export function UsersView() {
  const { users } = useFetchUsers();

  const userModalInitial = { show: false, payload: "", email: '', age: '', phone: '', eyeColor: '', gender: '' };

  const [userModal, setUserModal] = useState(userModalInitial);
  return (
    <Container>
      <UserDetailModal
        {...userModal}
        onHide={() => setUserModal(userModalInitial)}
      />
      {users?.map((user) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>

              <Button
                variant="primary"
                onClick={() => setUserModal({ show: true, payload: user.id, email: user.email, age: user.age, phone:user.phone, eyeColor:user.eyeColor, gender:user.gender})}
              >
                See User Description
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
