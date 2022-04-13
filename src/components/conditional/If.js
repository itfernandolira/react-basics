const condicaoIf = props => {
    if (props.teste) {
        return props.children;
    } else {
        return false;
    }
}

export default condicaoIf;