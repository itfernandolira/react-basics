import React from 'react'

import Primeiro from './components/basic/Primeiro'
import './App.css'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragmento'
import Card from './components/layout/Card'
import Familia from './components/basic/Familia'
import FamiliaMembro from './components/basic/FamiliaMembro'
import ListaAlunos from './components/repeat/ListaAlunos'
import ParOuImpar from './components/conditional/ParOuImpar'
import UserInfo from './components/conditional/UserInfo'

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
                <Familia apelido="Silva">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Rui"></FamiliaMembro>
                </Familia>
            </Card>

            <Card title="Repetição" color="#008080">
                <ListaAlunos />
            </Card>

            <Card title="Condicional #1" color="#FF00FF">
                <ParOuImpar numero={16} />
                <UserInfo user={{ nome: 'Carlos'}} />
            </Card>
        </div>
    </div>

export default app;