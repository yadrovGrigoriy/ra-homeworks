


const SearchBox = (props) => {


    const inputHandle = (event) => {
        props.filterBooks(event.target.value)
    }

    return (
        <input
            type="text"
            placeholder="Поиск по названию или автору"
            onChange={inputHandle}
            defaultValue={props.value}
        />
    );
};