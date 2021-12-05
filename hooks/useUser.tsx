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

  const { data, error } = useSWR(url, fetcher);

  const user = data;
  const loadingUser = !data && !error;
  const loadingUserError = error;

  return [user, loadingUser, loadingUserError];
};

export default useUser;
