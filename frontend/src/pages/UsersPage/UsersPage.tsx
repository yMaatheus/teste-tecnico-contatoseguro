import { useEffect, useState } from "react";
import { Form } from "../../components/Form";
import api from "../../lib/axios";
import { UserType } from "../../types";

export const UsersPage = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await api.get("/user");
      setUsers(data);
    };

    getUsers();
  }, []);

  console.log(users);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Form />
    </div>
  );
};
