import axios from 'axios';

const getSprites = async (head, body) => {
  const autogenURL = `https://raw.githubusercontent.com/Aegide/autogen-fusion-sprites/master/Battlers/${head}/${head}.${body}.png`
  const customURL = `https://raw.githubusercontent.com/Aegide/custom-fusion-sprites/main/CustomBattlers/${head}.${body}.png`

  try {
    const response = await fetch(customURL);
    if (!response.ok) {
      // If the response status is not ok (i.e. 404), return a placeholder URL
      return autogenURL; // replace with your desired placeholder URL
    }
    // If the response status is ok, return the original URL
    return customURL;
  } catch (error) {
    console.error(error);
    // If there's an error, return the placeholder URL
    return autogenURL; // replace with your desired placeholder URL
  }
}

export default getSprites