  // cant figure out the name formula just yet, temp formula
  const tempFusedNameGenerator = (str1, str2) => {
    // get the length of the two strings
    const len1 = str1.length;
    const len2 = str2.length;
  
    // get the midpoint of the two strings
    const mid1 = Math.floor(len1 / 2);
    const mid2 = Math.ceil(len2 / 2);
  
    // split the two strings at the midpoint
    const firstHalf = str1.substring(0, mid1);
    const secondHalf = str2.substring(mid2);
  
    // combine the two halves
    const combinedString = firstHalf + secondHalf;
    return combinedString;
  }

  export default tempFusedNameGenerator