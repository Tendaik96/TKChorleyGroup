import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

/* TYPES */
type reportItem = {
  id: number;
  name: string;
  category: string;
  createdAt: string;
};

/* 
⚠️ Known Issue & Temporary Fix
While the search functionality technically works, I noticed that all report data is rendered immediately on page load, even before a user has initiated a search.

Due to limited time before the project deadline, I wasn’t able to fully debug and fix this behaviour. Therefore, I have temporarily commented out the component that renders the fetched data, as the intended functionality (search-activated rendering) has not yet been achieved.

I chose to leave the rest of the logic in place so you can still see the structure and thought process behind my implementation. Given more time, this is something I would revisit and refine.
 */

type searchFunctionType = Dispatch<SetStateAction<string>>;
type clickSearchType = reportItem[];

/* Create context */
const searchContext = createContext<string>("")
const searchFunctionContext = createContext<searchFunctionType>(() => {});
const clickSearchFunctionContext = createContext<Dispatch<SetStateAction<string>>>(() => { });
const clickSearchContext = createContext<string>('');

const searchResultsContext = createContext<clickSearchType>([]);
const searchResultsFunctionContext = createContext<Dispatch<SetStateAction<clickSearchType>>>(() => {});

/* HOOKS */
export function useSearchValue() {
    return useContext(searchContext);
}

export function useSearchFunction() {
  return useContext(searchFunctionContext);
}

export function useClickSearchFunction() {
  return useContext(clickSearchFunctionContext);
}

export function useClickSearchValue() {
  return useContext(clickSearchContext);
}
/* using data from api */
export function useSearchResultsValue() {
  return useContext(searchResultsContext);
}

export function useSearchResultsFunction() {
  return useContext(searchResultsFunctionContext);
}


/* PROVIDER FUNCTION */
export function SearchProvider({ children }: any) {
    //track input text
    const [search, setSearch] = useState('')
    //search for  word in input after search button is clicked
    const [clickSearch, setClickSearch] = useState<string>("");
    //results to be displayed on searching page
    const [searchResults, setSearchResults] = useState<reportItem[]>([]);

    useEffect(() => {
      async function getReportsByCategory(word: string) {
        try {
          const response = await fetch(
            `http://www.localhost:3005/api/category/${word}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = await response.json();

          // Check if the response contains an array in the expected format
          if (Array.isArray(data.payload)) {
            console.log(data.payload);

              setSearchResults(data.payload)
          } else {
            console.error("Expected an array but got:", data);
          }
        } catch (err: any) {
          console.error("❌ Failed to fetch reports:", err.message);
        }
      }

      const data = getReportsByCategory(clickSearch);
      console.log(data);
    }, [search]);


//console.log(search )
    return (
        <searchResultsContext.Provider value={searchResults}>
      <searchResultsFunctionContext.Provider value={setSearchResults}>
      <clickSearchContext.Provider value={clickSearch}>
        <clickSearchFunctionContext.Provider value={setClickSearch}>
          <searchContext.Provider value={search}>
            <searchFunctionContext.Provider value={setSearch}>
              {children}
            </searchFunctionContext.Provider>
          </searchContext.Provider>
        </clickSearchFunctionContext.Provider>
            </clickSearchContext.Provider>
            </searchResultsFunctionContext.Provider>
        </searchResultsContext.Provider>
    );
}