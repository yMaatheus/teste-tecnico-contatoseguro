import { Form } from "../../components/Form";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/user";
import { UserTable } from "./UserTable/UserTable";
import useStore from "../../lib/store";
import { UserCreateModal } from "./UserCreateModal";

export const UsersPage = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUsers,
  });

  const [search, searchLabel] = useStore((state) => [
    state.search,
    state.searchLabel,
  ]);

  const users = data //TODO - Refactor this
    ?.filter((user) => {
      if (searchLabel === "Nome") {
        return user.name.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Email") {
        return user.email.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Telefone") {
        return user.phone?.toLowerCase().includes(search.toLowerCase());
      } else if (searchLabel === "Cidade") {
        return user.cityOfBirth?.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });

  const table = !isLoading && (
    <UserTable users={users || []} refetch={refetch} />
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form
        columns={["Nome", "Email", "Telefone", "Cidade"]}
        insertButton={<UserCreateModal refetch={refetch} />}
        table={table}
      />
    </div>
  );
};
