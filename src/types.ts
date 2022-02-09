///////////////
/* COUNTRIES */
///////////////

export type CountriesType = {
  countries: CountryType[];
};

export type CountryType = {
  status: number;
  name: { common: string };
  region: string;
  population: number;
  languages: MyLanguages;
  flags: {
    png: string;
  };
};

type MyLanguages = {
  [key: string]: string;
};

////////////
/* SEARCH */
////////////

export type SearchProp = {
  keyword: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/////////////
/* BUTTONS */
/////////////

export type ButtonFunctionType = {
  classToApply: string;
  buttonText: string;
  isItDisabled: boolean;
  clickFunction: () => void;
};

export type ButtonNavigationType = {
  linkToPath: string;
  classToApply: string;
  buttonText: string;
};

///////////
/* OTHER */
///////////

export type CountType = {
  count: number;
};

export type KeywordType = string;

export type CountryNameType = {
  countryName: string;
};

///////////
/* REDUX */
///////////

export type StateType = {
  [key: string]: any;
};
