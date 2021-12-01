// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useUsers = () => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/users.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const users = useSWR(url, fetcher).data;

  return users;
};

export default useUsers;
