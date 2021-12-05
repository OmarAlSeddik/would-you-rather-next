// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useUsers = () => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/users.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 10000 });

  const users = data;
  const loadingUsers = !data && !error;
  const loadingUsersError = error;

  return [users, loadingUsers, loadingUsersError];
};

export default useUsers;
