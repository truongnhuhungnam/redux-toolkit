import Counter from "./features/counter/Counter";

function App() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <main className="w-1/3 p-[30px] shadow-md shadow-gray-300">
                <Counter />
            </main>
        </div>
    );
}

export default App;
