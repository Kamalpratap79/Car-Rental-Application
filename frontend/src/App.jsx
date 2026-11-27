function App() {
    return (
        <div className="min-h-screen bg-page">

            <nav className="bg-navy text-white px-8 py-4">
                <h1 className="text-xl font-semibold">
                    Car Rental
                </h1>
            </nav>

            <main className="max-w-7xl mx-auto p-8">

                <div className="bg-white border border-slate-200
                                rounded-lg p-8 shadow-sm">

                    <h2 className="text-2xl font-semibold">
                        Welcome to Car Rental
                    </h2>

                    <p className="text-slate-500 mt-2">
                        Find the right car for your next journey.
                    </p>

                    <button className="bg-primary text-white
                                       px-6 py-2 rounded-md mt-5
                                       hover:bg-blue-700">
                        Explore Cars
                    </button>

                </div>

            </main>

        </div>
    );
}

export default App;