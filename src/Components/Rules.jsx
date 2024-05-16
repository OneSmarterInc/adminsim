import React, { useContext, useEffect } from "react";
import MyContext from "./ContextApi/MyContext";

const Rules = () => {

    const {globalRules, setGlobalRules} = useContext(MyContext);

  const getRules = async () => {
    try {
      let data = await fetch("http://localhost:4001/api/table");
      data = await data.json();
     
      setGlobalRules(data.result[0])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
      getRules();
    },[])
    //console.log(globalRules);
  return ;
};

export default Rules;
