// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";
// -- firebase -- //
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const useUser = () => {
  const [authUser, loading] = useAuthState(auth);

  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/users/${authUser?.uid}.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher);

  const user = data;
  const loadingUser = (!data && !error) || loading;
  const loadingUserError = error;

  return [user, loadingUser, loadingUserError];
};

export default useUser;
