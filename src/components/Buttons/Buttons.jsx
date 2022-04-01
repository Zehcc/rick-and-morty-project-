import React from 'react'
import {FcNext as Next, FcPrevious as Prev} from 'react-icons/fc'

const Buttons = ({counter, nextPage, previousPage}) => {
  return (
    <div className='pageButtons'>
            {counter > 1 && <Prev  size = {40} onClick={previousPage}>Pagina anterior</Prev>}
            {counter < 42 && <Next  size = {40} onClick={nextPage}>Siguiente pagina</Next>}
    </div>
  )
}

export default Buttons