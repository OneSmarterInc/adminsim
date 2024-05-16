import { useState } from "react";
import MyContext from "./MyContext";




const MyProvider = ({ children }) => {
  const [globalRules, setGlobalRules] = useState({});



  return (
    <MyContext.Provider
      value={{
        globalRules,
        setGlobalRules,
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
