export type fetchedPosts = {
  _id: string;
  title: string;
  content: string;
  photo: string;
};

export type CreatePost = Pick<fetchedPosts, 'photo' | 'title' | 'content'>

type fetchedVideos = {
  _id: string;
  title: string;
  url: string;
  photo: string;
};

export type CreateVideoContent = Pick<fetchedVideos, 'photo' | 'title' | 'url'>


type fetchedQuizzes = {
  _id: string;
  title: string;
  questions: [
    {
      question: string;
      answers: [
        {
          text: string;
          isCorrect: boolean;
        }
      ];
    }
  ];
};

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

