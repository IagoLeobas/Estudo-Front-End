import AnotherComponent from "./AnotherComponent";

export default FirstComponent;

function FirstComponent() {
    const name = "iago"
    return (
        <div className="firstcomponent">
            {/* Comentário no JSX */}
            <p>meu componente</p>
            <p>Nome: {name}</p>
            <AnotherComponent />

        </div>
    )
}