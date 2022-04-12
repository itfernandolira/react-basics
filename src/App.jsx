import React from 'react'

import Primeiro from './components/basic/Primeiro'
import './App.css'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Card from './components/layout/Card'
import Familia from './components/basic/Familia'

const app = () =>
    <div className='App'>
        <div className='Cards'>
            <Card title="Primeiro" color="#FFBF00">
                <Primeiro></Primeiro>
                <Primeiro></Primeiro>
            </Card>

            <Card title="Com parametro" color="#DE3163">
                <ComParametro titulo="Classificações" aluno="Pedro" nota={16.8}></ComParametro>
            </Card>
            
            <Card title="React Fragment" color="#9FE2BF">
                <Fragmento></Fragmento>
            </Card>

            <Card title="Membros da Família" color="#008000">
                <Familia apelido="Silva"></Familia>
            </Card>
        </div>
    </div>

export default app;