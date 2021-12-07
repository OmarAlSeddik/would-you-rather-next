// -- axios & swr -- //
import axios from "axios";
import useSWR from "swr";

const useQuestion = (questionId: string) => {
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/questions/${questionId}.json`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(url, fetcher);

  const question = data;
  const loadingQuestion = !data && !error;
  const loadingQuestionError = error;

  return [question, loadingQuestion, loadingQuestionError];
};

export default useQuestion;
