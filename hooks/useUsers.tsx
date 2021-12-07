// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useUsers = () => {
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/users.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 10000 });

  const users = data;
  const loadingUsers = !data && !error;
  const loadingUsersError = error;

  return [users, loadingUsers, loadingUsersError];
};

export default useUsers;
