import React, { useEffect, useState } from 'react';
import axios from 'axios';

import getSprites from '../../utils/getSprites';
import tempFusedNameGenerator from '../../utils/tempFusedNameGenerator';

const Fusion = ({ head, body }) => {
  const [dex, setDex] = useState(0)
  const [fusionId, setFusionId] = useState('')
  const [names, setNames] = useState('')
  const [fusedName, setFusedName] = useState('')
  const [isCustom, setIsCustom] = useState(0)
  const [img, setImg] = useState('https://raw.githubusercontent.com/Aegide/Aegide.github.io/master/question.png')
  
  useEffect(() => {
    // todo - maybe move sprite to it's own component 
    async function getImg() {
      const sprite = await getSprites(head[1], body[1])
      setImg(sprite[0])
      setIsCustom(sprite[1])
    }

    if (head[1] && body[1]) {
      setDex(head[1] + (420 * body[1]));

      setFusionId(`(${head[1]}.${body[1]})`);

      setNames(`${head[0].charAt(0).toUpperCase()+head[0].slice(1)}/` +
      `${body[0].charAt(0).toUpperCase()+body[0].slice(1)}`)

      setFusedName(tempFusedNameGenerator(head[0], body[0]))

      getImg()
    }
  }, [head, body])

  return (
    <div id={`${head[1]}.${body[1]}`}>
    <span>{fusedName}</span> {/* todo - replace w/ real fused names */}
    <br /> {/* todo delete after styling */}
    <span>{dex ? dex : ''}</span>
    <br /> {/* todo delete after styling */}
    <span className={isCustom ? 'custom' : 'not-custom'}>{fusionId}</span>
    <br /> {/* todo delete after styling */}
    <span>{names}</span>
    <img src={img} alt="" />
    {/* todo - sprite compoment */}
    {/* todo - types (check for exceptions) */}
    {/* todo - base stats component  */}
    {/* todo - abilities (check for exceptions) */}
    {/* todo - type effectiveness component */}
    <hr />
    </div>
  )
}

export default Fusion;
