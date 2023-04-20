import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/user";
import { UserTable } from "./UserTable/UserTable";
import useUserStore from "../../lib/user.store";
import { UserCreateModal } from "./UserCreateModal";

export const UsersPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  const [search, searchLabel] = useUserStore((state) => [
    state.search,
    state.searchLabel,
  ]);

  const users = data //TODO - Refactor this
    ?.filter((user) =>
      searchLabel === "Nome"
        ? user.name.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((user) =>
      searchLabel === "Email"
        ? user.email.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((user) =>
      searchLabel === "Telefone"
        ? user.phone?.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((user) =>
      searchLabel === "Cidade"
        ? user.cityOfBirth?.toLowerCase().includes(search.toLowerCase())
        : true
    );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Email", "Telefone", "Cidade"]}
        insertButton={<UserCreateModal refetch={refetch} />}
        table={
          !isLoading && <UserTable users={users || []} refetch={refetch} />
        }
      />
    </div>
  );
};
