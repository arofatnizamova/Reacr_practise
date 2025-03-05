import './App.css';

function WriteTask() {
    return ( <
        div >
        <
        input type = "text"
        placeholder = "enter task" / >
        <
        button type = "button" > add task < /button> <
        /div>
    )
}

function List() {
    const tasks = ['write code', 'draw cubes', 'go to the gym', ]
    return ( <
        div className = "App" >
        <
        h1 > Todays tasks < /h1> <
        ol > {
            tasks.map((task, index) =>
                <
                li key = { index } > { task } < /li>
            )
        } <
        /ol> <
        /div>
    );
}

function ToDoList() {
    return ( <
        >
        <
        WriteTask / >
        <
        List / >
        <
        />    
    );

}
export default ToDoList;