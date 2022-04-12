import React from 'react'

import Primeiro from './components/basic/Primeiro'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Card from './components/layout/Card'

export default () =>
    <div>
        <Card title="Primeiro">
            <Primeiro></Primeiro>
            <Primeiro></Primeiro>
        </Card>

        <Card title="Com parametro">
            <ComParametro titulo="Classificações" aluno="Pedro" nota={16.8}></ComParametro>
        </Card>
        
        <Card title="Com parametro">
            <Fragmento></Fragmento>
        </Card>
    </div>