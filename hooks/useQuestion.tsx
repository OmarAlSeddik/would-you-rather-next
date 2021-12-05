// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useQuestion = (questionId: string) => {
  const url = `https://would-you-rather-next-default-rtdb.firebaseio.com/questions/${questionId}.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher);

  const question = data;
  const loadingQuestion = !data && !error;
  const loadingQuestionError = error;

  return [question, loadingQuestion, loadingQuestionError];
};

export default useQuestion;
