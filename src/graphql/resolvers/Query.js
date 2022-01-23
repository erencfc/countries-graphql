export const Query = {
    // Country
    countries: (_, { filter }, { db }) => {
        const shouldApplyFilters = filter !== undefined; // if there is no filter return all countries

        let countries = db.countries;

        if (!shouldApplyFilters) return countries;

        const shouldApplyCodeFilter = filter.code !== undefined;
        const shouldApplyCurrencyFilter = filter.currency !== undefined;
        // const shouldApplyContinentFilter

        if (shouldApplyCodeFilter) {
            countries = countries.filter(
                (country) => country.code === filter.code
            );
        }

        if (shouldApplyCurrencyFilter) {
            countries = countries.filter(
                (country) => country.currency === filter.currency
            );
        }

        return countries;
    },
    country: (_, args, { db }) =>
        db.countries.find((country) => country.code == args.code),

    // Continent
    continents: (_, { filter }, { db }) => {
        if (filter === undefined) return db.continents;

        return db.continents.filter(
            (continent) => continent.code == filter.code
        );
    },
    continent: (_, args, { db }) =>
        db.continents.find((continent) => continent.code == args.code),

    // Language
    languages: (_, { filter }, { db }) => {
        if (filter === undefined) return db.languages;

        return db.languages.filter((language) => language.code == filter.code);
    },
    language: (_, args, { db }) =>
        db.languages.find((language) => language.code == args.code),
};
