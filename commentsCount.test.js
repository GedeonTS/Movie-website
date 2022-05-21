import comments from './__mocks__/commentsCount.js';

const listOne = [
  {
    username: 'Jane',
    comment: 'Nice movie',
  },
  {
    username: 'Sam',
    comment: 'Nice movie',
  },
  {
    username: 'John',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
  {
    username: 'Mary',
    comment: 'Nice movie',
  },
  {
    username: 'James',
    comment: 'Nice movie',
  },
];

const listTwo = [
  {
    username: 'John',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
  {
    username: 'Mary',
    comment: 'Nice movie',
  },
  {
    username: 'James',
    comment: 'Nice movie',
  },
  {
    username: 'Sam',
    comment: 'Nice movie',
  },
  {
    username: 'John',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
  {
    username: 'Mary',
    comment: 'Nice movie',
  },
  {
    username: 'Natasha',
    comment: 'Nice movie',
  },
];

const listThree = [
  {
    username: 'Jane',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
  {
    username: 'Mary',
    comment: 'Nice movie',
  },
];

const listFour = [
  {
    username: 'Josh',
    comment: 'Nice movie',
  },
  {
    username: 'John',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
  {
    username: 'Mary',
    comment: 'Nice movie',
  },
  {
    username: 'James',
    comment: 'Nice movie',
  },
  {
    username: 'Sam',
    comment: 'Nice movie',
  },
  {
    username: 'John',
    comment: 'Nice movie',
  },
  {
    username: 'Ruth',
    comment: 'Nice movie',
  },
];

describe('Should test the number of comments on each movie', () => {
  test('Test the number of comments', () => {
    expect(comments(listOne)).toBe(6);
  });
  test('Test the number of comments', () => {
    expect(comments(listTwo)).toBe(9);
  });
  test('Test the number of comments', () => {
    expect(comments(listThree)).toBe(3);
  });
  test('Test the number of comments', () => {
    expect(comments(listFour)).toBe(8);
  });
});
