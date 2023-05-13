type Dictionary = {
    [key: string]: () => Promise<{ [key: string]: any }>;
};

interface Dictionaries {
    [locale: string]: () => Promise<Record<string, string>>;
}

const dictionaries: Dictionary = {
    ar: () => import('@/lang/ar.json').then((module) => module.default),
    he: () => import('@/lang/he.json').then((module) => module.default),
    en: () => import('@/lang/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
    const localeKey = Object.keys(dictionaries).find((key) => key === locale);
    const dictionary = await dictionaries["ar"]();
    return dictionary;
}