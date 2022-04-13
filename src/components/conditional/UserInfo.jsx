import React from "react";
import If from './If'

const userInfo = props => {
    const user = props.user || {}
    return (
        <div>
            <If teste={user && user.nome}>
                Seja bem-vindo, <strong>{user.nome}</strong>
            </If>
        </div>
    )
}

export default userInfo;
