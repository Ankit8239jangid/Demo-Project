import { createContext, useState } from 'react';
import API from '../util/Api';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const Navigater = useNavigate()

    const [signupInput, setSignupInput] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    });

    const [loginInput, setLoginInput] = useState({
        username: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSignup = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await API.post('user/signup', signupInput);
            if (res) {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('User', JSON.stringify(res.data.user));
                Navigater('/app');
            }
        } catch (err) {
            const message = err.response?.data?.message || 'Signup failed. Please try again.';
            setError(message);
            console.error('❌ Signup error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const res = await API.post('/user/login', loginInput);
            const { token, user } = res.data;
            if (res) {
                localStorage.setItem('token', token);
                localStorage.setItem('User', JSON.stringify(user));
                Navigater('/app');
            }
        } catch (err) {
            const message = err.response?.data?.message || 'Login failed. Please try again.';
            setError(message);
            console.error('❌ Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        Navigater('/');
    };

    return (
        <AuthContext.Provider
            value={{
                signupInput,
                handleSignupChange,
                handleSignup,
                loginInput,
                handleLoginChange,
                handleLogin,
                loading,
                error,
                handleLogOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
