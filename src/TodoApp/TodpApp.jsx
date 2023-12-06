const TodpApp = ({todo, index, deleteTodo, getData, complitetask}) => {

    return (
        <>
            <div className="d_flex">
                <li>{todo}</li> 
                <button onClick={()=> deleteTodo(index)}>Delete</button>
                <button onClick={() => getData(index)} >Edite</button>
                <button onClick={() => complitetask(index)} >Done</button>
            </div>
        </>
    );
};

export default TodpApp;