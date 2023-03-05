import React, { useEffect, useState } from 'react';
import axios from 'axios';

// dex = head[1] + (420 * body[1])

const Fusion = ({ head, body }) => {

  const [dex, setDex] = useState(0)
  const [fusionId, setFusionId] = useState('')
  const [names, setNames] = useState('')
  
  useEffect(() => {
    if (head[1] && body[1]) {
      setDex(head[1] + (420 * body[1]));
      setFusionId(`(${head[1]}.${body[1]})`);
      setNames(`${head[0].charAt(0).toUpperCase()+head[0].slice(1)}/` +
      `${body[0].charAt(0).toUpperCase()+body[0].slice(1)}`)
    }
  }, [head, body])
  



  return (
    <div id={`${head[1]}.${body[1]}`}>
    {/* todo - fusion name */}
    <span>{dex ? dex : ''}</span>
    <br /> {/* todo delete after styling */}
    <span>{fusionId}</span>
    <br /> {/* todo delete after styling */}
    <span>{names}</span>
    {/* todo - sprite compoment */}
    {/* todo - types (check for exceptions) */}
    {/* todo - base stats component  */}
    {/* todo - abilities (check for exceptions) */}
    {/* todo - type effectiveness component */}
    </div>
  )
}

export default Fusion;
