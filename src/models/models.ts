
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
};

export type QuizAnswers = {text: string; isCorrect: 'Answer is incorrect' | 'Answer is correct'};
export type IsCorrect = Pick<QuizAnswers, 'isCorrect'>;
export type QuizQuestions = {question: string, answers: QuizAnswers[]};
export type QuizSection = { questions: QuizQuestions[] };
export type CompletedQuiz = { title: {title: string}, questions: QuizQuestions[][] };

export interface reduxState{
  dataFromApiForStudents: IFetchedData,
  loading: boolean,
  error: string,
  answer: QuizAnswers,
  quizQuestion: QuizQuestions,
  quizSection: QuizSection,
  completeQuiz: CompletedQuiz
};






