export const Country = {
    continent: ({ continent }, __, { continents }) => ({
        code: continent,
        name: continents[continent],
    }),
};
