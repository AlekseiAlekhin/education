function stringToType(str) {
  switch (str){
    case "null":
      return null;
    case "undefined":
      return undefined;
    case "true":
      return true;
    case "false":
      return false;
    case "0":
      return 0;
  }
  if(Number(str)){
    return parseInt(str);
  }
  
  return str; 

 
};

window.stringToType = stringToType;

export default stringToType;
