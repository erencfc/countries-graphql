export const Query = {
    // Country
    countries: (_, { filter }, { continents, countries, languages }) =>
        Object.entries(countries).map(([code, country]) => ({
            ...country,
            code,
        })),

    country: (_, args, { countries }) => {
        const code = args.code;
        const country = countries[code];
        return { ...country, code };
    },
};
