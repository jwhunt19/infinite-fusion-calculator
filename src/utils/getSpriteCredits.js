import axios from 'axios';
import Papa from 'papaparse';

function getSpriteCredits(id, setFusionCredits) {

  // Get the CSV data
  axios.get('https://raw.githubusercontent.com/infinitefusion/sprites/main/Sprite%20Credits.csv')
    .then(response => {
      const parsedCsv = Papa.parse(response.data, { header: false });
      const csvData = parsedCsv.data;

      // Find the entry with the id
      const credits = csvData.find(row => {
        return row[0] === id;
      });  

      //  if the id is found, return the credit, otherwise return an empty string
      let credit = credits ? credits[1] : ""
      setFusionCredits(credit);
    })
    .catch(error => console.log(error));
}

export default getSpriteCredits;
