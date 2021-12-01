// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useQuestion = (questionId: "string") => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions/${questionId}.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const question = useSWR(url, fetcher).data;

  return question;
};

export default useQuestion;
