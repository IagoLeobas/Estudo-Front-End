const RenderCond = ({ x, y }) => {

    return <div>
        {x > 5 && <p> X é maior que 5</p>}
        {x > 5 ? <p>X é um número Alto</p> : <p> X é um número Baixo</p>}
        <p>O valor de Y é: {y}</p>
    </div>;
};

export default RenderCond;