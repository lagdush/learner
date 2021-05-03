type fetchedPosts = {
  title: string;
  content: string;
  photo: string;
};

type fetchedVideos = {
  title: string;
  url: string;
  photo: string;
};

type fetchedQuizzes = {
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
  };
}
