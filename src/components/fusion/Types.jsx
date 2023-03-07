import React from "react";

const Types = ({ head, body }) => {
  
}

export default Types;


// A Fusion's types are the head's first type and the Body's 
// second type. E.g.: Zubat is Poison/Flying. Any fusion 
// with Zubat's head (err, mouth) will be part Poison. 
// Any fusion with Zubat's body will be part Flying. A 
// Zubat's head on a Grimer's body would be pure Poison.

// The body will provide its first type instead of its 
// second IF the head is already providing that type 
// (E.g.: Grimer/Oddish is Poison/Grass. Oddish normally 
// provides Poison as a body, but Grimer already provides 
// Poison; so to avoid redundancy, Oddish instead provides 
// its primary type, Grass).