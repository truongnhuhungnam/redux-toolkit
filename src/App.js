import Todos from "./features/todos/Todos";

function App() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <main className="w-1/3 p-[30px] shadow-md shadow-gray-300">
                <Todos />
            </main>
        </div>
    );
}

export default App;
