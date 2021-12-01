// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useQuestions = () => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const questions = useSWR(url, fetcher).data;

  return questions;
};

export default useQuestions;
