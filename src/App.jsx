import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'

export default () =>
    <div>
        <Primeiro></Primeiro>
        <ComParametro titulo="Classificações" aluno="Pedro" nota={16.8}></ComParametro>
        <Fragmento></Fragmento>
    </div>