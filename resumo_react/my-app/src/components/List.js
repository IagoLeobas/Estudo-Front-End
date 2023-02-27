const List = () => {
    const items = [{
        id: 1,
        name: "Iago"
    }, {
        id: 2,
        name: "Caio"
    }, {
        id: 3,
        name: "Paulo"
    }];

    return <div>
        {items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}
    </div>;
};

export default List;