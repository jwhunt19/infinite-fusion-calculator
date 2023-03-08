import React, { useEffect, useState } from 'react';

import tempFusedNameGenerator from '../../utils/tempFusedNameGenerator';
import Sprite from './Sprite';
import Types from './Types';

const Fusion = ({ head, body }) => {
  const [dex, setDex] = useState(0)
  const [fusionId, setFusionId] = useState('')
  const [names, setNames] = useState('')
  const [fusedName, setFusedName] = useState('')
  const [isCustom, setIsCustom] = useState(0)
  
  useEffect(() => {
    if (head[1] && body[1]) {
      setDex(head[1] + (420 * body[1]));

      setFusionId(`(${head[1]}.${body[1]})`);

      setNames(`${head[0].charAt(0).toUpperCase()+head[0].slice(1)}/` +
      `${body[0].charAt(0).toUpperCase()+body[0].slice(1)}`)

      setFusedName(tempFusedNameGenerator(head[0], body[0]))
    }
  }, [head, body])

  return (
    <div id={`${head[1]}.${body[1]}`}>
    <span>{fusedName}</span> {/* todo - replace w/ real fused names */}
    <span>{dex ? dex : ''}</span>
    <span className={isCustom ? 'custom' : 'not-custom'}>{fusionId}</span>
    <span>{names}</span>
    <Sprite head={head} body={body} setIsCustom={setIsCustom} />
    {/* todo - types (check for exceptions) */}
    <Types head={head} body={body}/>
    {/* todo - base stats component  */}
    {/* todo - abilities (check for exceptions) */}
    {/* todo - type effectiveness component */}
    <hr />
    </div>
  )
}

export default Fusion;
