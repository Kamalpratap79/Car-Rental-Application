import useAuth from "../../hooks/useAuth";

const AdminDashboard = () => {

    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-[#F5F7FA]">

            <nav className="bg-[#082746] text-white
                            px-8 py-4 flex justify-between">

                <h1 className="text-xl font-semibold">
                    Car Rental | Admin
                </h1>

                <button onClick={logout}>
                    Logout
                </button>

            </nav>

            <main className="p-8">

                <h2 className="text-2xl font-bold">
                    Admin Dashboard
                </h2>

                <p className="mt-2">
                    User ID: {user?.userId}
                </p>

                <p>Role: {user?.userRole}</p>

            </main>

        </div>
    );
};

export default AdminDashboard;