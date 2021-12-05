// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useQuestions = () => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher, { refreshInterval: 10000 });

  const questions = data;
  const loadingQuestions = !data && !error;
  const loadingQuestionsError = error;

  return [questions, loadingQuestions, loadingQuestionsError];
};

export default useQuestions;
