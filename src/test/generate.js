import { faker } from '@faker-js/faker';

const buildSavedMovie = (overrides) => {
  return {
    id: faker.datatype.uuid(),
    poster_path: faker.image.imageUrl(),
    release_date: faker.date.past(4).getTime(),
    title: faker.lorem.sentence(2),
    vote_average: faker.datatype.number(5),
    ...overrides,
  };
};

export { buildSavedMovie };
