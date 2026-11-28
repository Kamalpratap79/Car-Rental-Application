import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);

        try {

            const data = await login(credentials);

            toast.success("Login successful");

            if (data.userRole === "ADMIN") {
                navigate("/admin/dashboard");
            } else if (data.userRole === "CUSTOMER") {
                navigate("/customer/dashboard");
            } else {
                toast.error("Unknown user role");
            }

        } catch (error) {

            toast.error("Login failed. Check your credentials.");

        } finally {

            setLoading(false);
        }
    };

    return (
        <div>

            <h2 className="text-3xl font-bold text-slate-900">
                Log in
            </h2>

            <p className="text-sm text-slate-500 mt-2 mb-8">
                Welcome back! Please enter your details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Email */}

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                    >
                        Email
                    </label>

                    <div className="relative">

                        <Mail
                            size={18}
                            className="absolute left-3 top-3.5
                                       text-slate-400"
                        />

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full border border-slate-300
                                       rounded-md py-3 pl-10 pr-3
                                       outline-none focus:border-blue-600
                                       focus:ring-1 focus:ring-blue-600"
                            required
                        />

                    </div>
                </div>

                {/* Password */}

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-2"
                    >
                        Password
                    </label>

                    <div className="relative">

                        <Lock
                            size={18}
                            className="absolute left-3 top-3.5
                                       text-slate-400"
                        />

                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border border-slate-300
                                       rounded-md py-3 pl-10 pr-12
                                       outline-none focus:border-blue-600
                                       focus:ring-1 focus:ring-blue-600"
                            required
                        />

                        <button
                            type="button"
                            aria-label={showPassword
                                ? "Hide password"
                                : "Show password"}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3.5
                                       text-slate-500"
                        >
                            {showPassword
                                ? <EyeOff size={18} />
                                : <Eye size={18} />
                            }
                        </button>

                    </div>
                </div>

                {/* Login Button */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#0563C1] text-white
                               font-medium py-3 rounded-md
                               hover:bg-blue-700 transition-colors
                               disabled:opacity-60"
                >
                    {loading ? "Logging in..." : "Log in"}
                </button>

            </form>

            <p className="mt-6 text-sm text-slate-600">

                New here?{" "}

                <Link
                    to="/signup"
                    className="text-[#0563C1] font-medium hover:underline"
                >
                    Create an account
                </Link>

            </p>

        </div>
    );
};

export default Login;