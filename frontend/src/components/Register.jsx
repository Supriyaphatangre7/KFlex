export const Register = () => {
    return <>
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-500">
                    Register
                </h2>
                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring focus:ring-green-500 outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring focus:ring-green-500 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password" className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring focus:ring-green-500 outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring focus:ring-green-500 outline-none"
                        />

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Already have an account */}
                <p className="mt-4 text-center text-gray-400">
                    Already have an account?{" "}
                    <a href="/Login" className="text-green-500 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>


    </>
}