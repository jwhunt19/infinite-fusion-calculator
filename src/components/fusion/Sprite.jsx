import React, { useEffect, useState } from 'react';
import getSprites from '../../utils/getSprites';

const Sprite = ({ head, body, setIsCustom }) => {
  const [img, setImg] = useState('https://raw.githubusercontent.com/Aegide/Aegide.github.io/master/question.png')

  useEffect(() => {
    if (head.id && body.id) {
      async function getImg() {
        // Calls imported getSprites function that handles custom sprite check
        const sprite = await getSprites(head.id, body.id)
        setImg(sprite[0])

        // Check if custom sprite is being checked (team builder likely won't check)
        if (setIsCustom) setIsCustom(sprite[1])
      }

      getImg()
    }
  }, [head, body])

  return (
    <img className='fusion-sprite' src={img} alt={`A pokemon representing the fusion of ${head.name} and ${body.name}`} />
  )
}


export default Sprite;
