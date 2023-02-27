const AnotherComponent = () => {

    const handleClick = () => {
        console.log("clicou no botão")
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <hr />
            <button onClick={() => console.log("teste")}>Evento no Elemento</button>
        </div>
    );
};

export default AnotherComponent;