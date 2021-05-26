
export type fetchedPosts = {
  _id: string;
  title: string;
  content: string;
  photo: string;
};

export type CreatePost = Omit<fetchedPosts, '_id'>

type fetchedVideos = {
  _id: string;
  title: string;
  url: string;
  photo: string;
};

export type CreateVideoContent = Omit<fetchedVideos, '_id'>


type QuizAnswers = {text: string; isCorrect: boolean}
type QuizQuestions = {question: string, answers: QuizAnswers[]}

type fetchedQuizzes = {
  _id: string;
  title: string;
  questions: QuizQuestions[]
};

export type CreateQuiz = Omit<fetchedQuizzes, '_id'>

export default interface IFetchedData {
  user: {
    posts: fetchedPosts[];
    videos: fetchedVideos[];
    quizzes: fetchedQuizzes[];
    _id: string;
    email: string;
  };
}

export interface reduxState{
  dataFromApiForStudents: IFetchedData,
  loading: boolean,
  error: string
}






