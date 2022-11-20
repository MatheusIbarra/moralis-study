import Moralis from 'moralis';

export const startMoralis = async () => {
  await Moralis.start({
    apiKey: '3gxdopqneGEgPhWEc4XO7OO7XFlrwFPSSGc8OYcW65yD7Ehf1jdoPIeCKsFnFLMB',
  });
};
