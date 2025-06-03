import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";


export default function SignupCard() {
  const { signupInput, handleSignupChange, handleSignup } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-100 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Image Section */}
        <div className="">
          <img
            src="https://img.freepik.com/free-photo/electric-car-charging-home-clean-energy-filling-technology_35913-2530.jpg?semt=ais_hybrid&w=740"
            alt="Charging Station"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Sign Up</h2>
          <p className="text-gray-500 text-center mt-2 mb-8">Charging EV Station</p>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required={true}
                type="text"
                name="firstname"
                value={signupInput.firstname}
                onChange={handleSignupChange}
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                required={true}
                type="text"
                name="lastname"
                value={signupInput.lastname}
                onChange={handleSignupChange}
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <input
              required={true}
              type="username"
              name="username"
              value={signupInput.username}
              onChange={handleSignupChange}
              placeholder="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              required={true}
              type="password"
              name="password"
              value={signupInput.password}
              onChange={handleSignupChange}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-sm text-center text-gray-500">
            Alrady have an account?{' '}
            <NavLink to={"/login"}  className="text-green-600 hover:underline">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
