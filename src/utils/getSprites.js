const getSprites = async (head, body) => {
  const autogenURL = `https://raw.githubusercontent.com/Aegide/autogen-fusion-sprites/master/Battlers/${head}/${head}.${body}.png`
  // const customURL = `https://raw.githubusercontent.com/Aegide/custom-fusion-sprites/main/CustomBattlers/${head}.${body}.png`
  const customURL = `https://raw.githubusercontent.com/infinitefusion/sprites/main/CustomBattlers/${head}.${body}.png`

  try {
    const response = await fetch(customURL);
    if (!response.ok) {
      return [autogenURL, 0]; // If the response status is not ok, return the autogen URL
    }
    return [customURL, 1]; // If the response status is ok, return the custom URL
  } catch (error) {
    return [autogenURL, 0]; // If there's an error, return the autogen URL
  }
}

export default getSprites
