import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

// I introduced context as this data is shared across the app. 
// This is a more efficient alternative to prop drilling.

//-------------TYPES-------------
type reportItem = {
  id: number;
  name: string;
  category: string;
  createdAt: string;
};


type reportsArr = reportItem[];
type reportsFunctionType = Dispatch<SetStateAction<reportsArr>>;

/* -----------------CONTEXT----------------------- */
export const ReportsContext = createContext<reportsArr>([]);
export const ReportsFunctionContext = createContext<reportsFunctionType>(() => { });

export const LoadingContext = createContext<boolean>(false)

/* --------Hooks-------- */
export function useReportsValue() {
    return useContext(ReportsContext);
  }
  
  export function useReportsFunction() {
    return useContext(ReportsFunctionContext);
}

export function useLoadingValue() {
  return useContext(LoadingContext);
}
  
/* --------------PROVIDER FUNCTION--------------- */
export function ProductProvider({ children }: any) { 
  const [report, setReports] = useState<reportsArr>([]);
  const [loading, setLoading] = useState(false);
    

    useEffect(() => {
      async function getReports() {
        try {
          const response = await fetch(
            "http://www.localhost:3005/api/category",
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = await response.json();

          // Check if the response contains an array in the expected format
          if (Array.isArray(data.payload)) {
            console.log(data.payload);
            setReports(data.payload);

            // Setting loading to true enables conditional rendering.
            // While loading is false, a loading message is shown.            
            setLoading(true);
          } else {
            console.error("Expected an array but got:", data);
          }
        } catch (err: any) {
          console.error("❌ Failed to fetch reports:", err.message);
          setLoading(true); // still set loading to true to avoid indefinite loader
        }
      }

      getReports();
    }, []);


  return (
    <LoadingContext.Provider value={loading}>
      <ReportsContext.Provider value={report}>
        <ReportsFunctionContext.Provider value={setReports}>
          {children}
        </ReportsFunctionContext.Provider>
      </ReportsContext.Provider>
    </LoadingContext.Provider>
  );
    }

