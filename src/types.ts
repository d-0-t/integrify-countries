///////////////
/* COUNTRIES */
///////////////

import rootReducer from "./redux/reducer";

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

export type KeyValueAnyType = {
  [key: string]: any;
};

export type AddToCartType = {
  type: "ADD_TO_CART";
  payload: {
    item: CountryType;
  };
};

export type RemoveFromCartType = {
  type: "REMOVE_FROM_CART";
  payload: {
    item: CountryType;
  };
};

export type GetCountriesType = {
  type: "GET_COUNTRIES";
  payload: {
    countries: CountriesType;
  };
};

export type GetKeywordType = {
  type: "GET_KEYWORD";
  payload: {
    keyword: string;
  };
};

export type GetOneCountryType = {
  type: "GET_ONE_COUNTRY";
  payload: {
    country: CountryType;
  };
};

export type ActionsType =
  | GetKeywordType
  | GetCountriesType
  | GetOneCountryType
  | AddToCartType
  | RemoveFromCartType;

export type RootState = ReturnType<typeof rootReducer>;
