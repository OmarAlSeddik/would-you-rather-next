// -- context -- //
import { useContext } from "react";
import AppContext from "../context/AppContext";
// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useUser = () => {
  const context = useContext(AppContext);
  const loggedInUserId = context.loggedInUserId;

  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/users/${loggedInUserId}.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const user = useSWR(url, fetcher).data;

  return user;
};

export default useUser;
