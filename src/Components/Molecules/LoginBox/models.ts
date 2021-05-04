type fetchedPosts = {
  _id: string;
  title: string;
  content: string;
  photo: string;
};

type fetchedVideos = {
  _id: string;
  title: string;
  url: string;
  photo: string;
};

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
    _id: string
  };
}

export interface reduxState{
  dataFromApiForStudents: IFetchedData
}

