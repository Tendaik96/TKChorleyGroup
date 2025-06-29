import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";


//-------------TYPES-------------
type reportItem = {
  id: number;
  name: string;
  category: string;
  createdAt: string;
};


type reportsArr = reportItem[];
type reportsFunctionType = Dispatch<SetStateAction<reportsArr>>;

export const ReportsContext = createContext<reportsArr>([]);
export const ReportsFunctionContext = createContext <reportsFunctionType>(() => {});

/* --------Hooks-------- */
export function useReportsValue() {
    return useContext(ReportsContext);
  }
  
  export function useReportsFunction() {
    return useContext(ReportsFunctionContext);
}
  
export function ProductProvider({ children }: any) { 
    const [report, setReports] = useState < reportsArr>([]);
    

    useEffect(() => {
      async function getReports() {
        try {
          const response = await fetch("http://www.localhost:3005/api/category", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          const data = await response.json();

          if (Array.isArray(data.payload)) {
            console.log(data.payload);
            setReports(data.payload);
          } else {
            console.error("Expected an array but got:", data);
          }
        } catch (err: any) {
          console.error("❌ Failed to fetch reports:", err.message);
        }
      }

      getReports();
    }, []);


    return (
        <ReportsContext.Provider value={report}>
            <ReportsFunctionContext.Provider value={setReports}>
                {children}
            </ReportsFunctionContext.Provider >      
        </ReportsContext.Provider>   
            
      );
    }

