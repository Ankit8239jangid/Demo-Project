import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NavLink } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoginCard = () => {
  const {
    loginInput,
    handleLoginChange,
    handleLogin,
    loading,
    
  } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-100 px-4 py-10">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-lg">

        {/* Left: Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://img.freepik.com/premium-photo/woman-with-smart-phone-waiting-her-electric-car-charge_506452-21195.jpg?ga=GA1.1.710660183.1748865908&semt=ais_hybrid&w=740"
            alt="EV Charging"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Right: Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Login</h2>
          <p className="text-sm text-gray-500 mb-6 text-center">Charging EV Station</p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="username"
                name="username"
                value={loginInput.username}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={loginInput.password}
                onChange={handleLoginChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your password"
              />
            </div>

            {loading ? <AiOutlineLoading3Quarters className="font-bold text-2xl text-green-600 w-full animate-spin" /> :
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Login
              </button>
            }
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            Don’t have an account?{' '}
            <NavLink to={"/"} className="text-green-600 hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
