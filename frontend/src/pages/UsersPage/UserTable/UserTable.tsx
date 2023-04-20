import { Button } from "react-daisyui";
import { GenericTable } from "../../../components/GenericTable";
import { UserType } from "../../../types";
import { UserEditModal } from "../UserEditModal";
import { QueryObserverResult } from "@tanstack/react-query";
import { UserDetailModal } from "../UserDetailModal";
import { deleteUser } from "../../../services/user";

export const UserTable = ({
  users = [],
  refetch,
}: {
  users: UserType[];
  refetch: () => Promise<QueryObserverResult<UserType[], unknown>>;
}) => {
  const handleDelete = (id: number) => {
    deleteUser(id).then(() => refetch());
  };
  return (
    <>
      <GenericTable
        keyExtractor={({ id }) => `${id}`}
        data={users}
        columns={
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Cidade</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        }
        renderItem={(user: UserType) => (
          <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.cityOfBirth}</td>
            <td></td>
            <td>
              <UserDetailModal {...user} />
            </td>
            <td>
              <UserEditModal {...user} refetch={refetch} />
            </td>
            <td>
              <Button
                className="btn btn-ghost btn-xs"
                onClick={() => handleDelete(user.id)}
              >
                Remover
              </Button>
            </td>
          </>
        )}
      />
    </>
  );
};
