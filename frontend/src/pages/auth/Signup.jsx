import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signup } from "../../services/authService";

const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);

        try {

            const request = {
                name: user.name,
                email: user.email,
                password: user.password
            };

            await signup(request);

            toast.success("Account created successfully");

            navigate("/login");

        } catch (error) {

            toast.error("Registration failed. Please try again.");

        } finally {

            setLoading(false);
        }
    };

    const inputClass = `w-full border border-slate-300
                        rounded-md px-4 py-3 outline-none
                        focus:border-blue-600
                        focus:ring-1 focus:ring-blue-600`;

    return (
        <div>

            <h2 className="text-3xl font-bold text-slate-900">
                Create an account
            </h2>

            <p className="text-sm text-slate-500 mt-2 mb-8">
                Register to start booking your favourite cars.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label htmlFor="name"
                           className="block text-sm font-medium mb-2">
                        Full Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email"
                           className="block text-sm font-medium mb-2">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputClass}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password"
                           className="block text-sm font-medium mb-2">
                        Password
                    </label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Create password"
                        className={inputClass}
                        minLength={8}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword"
                           className="block text-sm font-medium mb-2">
                        Confirm Password
                    </label>

                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        className={inputClass}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0563C1] text-white
                               py-3 rounded-md font-medium
                               hover:bg-blue-700 disabled:opacity-60"
                >
                    {loading ? "Creating account..." : "Sign up"}
                </button>

            </form>

            <p className="mt-6 text-sm text-slate-600">

                Already have an account?{" "}

                <Link
                    to="/login"
                    className="text-[#0563C1] font-medium hover:underline"
                >
                    Log in
                </Link>

            </p>

        </div>
    );
};

export default Signup;