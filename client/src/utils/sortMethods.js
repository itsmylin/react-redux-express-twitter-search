const sortMethods = {
  date: (a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  },
  favorite: (a, b) => {
    return b.favorite_count - a.favorite_count;
  },
  retweet: (a, b) => {
    return b.retweet_count - a.retweet_count;
  }
};

export default sortMethods;
