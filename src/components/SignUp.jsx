import { useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from '../assets/images2/login images 1.png';


export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'patient', // Default role
    });
    const [showPassword, setShowPassword] = useState(false);
    const [alerts, setAlerts] = useState([]); // Placeholder for messages

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., API call)
        console.log('SignUp submitted:', formData);
        // Example: fetch('/api/signup', { method: 'POST', body: JSON.stringify(formData) });
    };

    // Placeholder for alerts
    const addAlert = (category, message) => {
        setAlerts((prev) => [...prev, { id: Date.now(), category, message }]);
    };

    const removeAlert = (id) => {
        setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 flex items-center justify-around py-12 px-4 sm:px-6 lg:px-8"
                style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div></div>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create Account</h2>
                </div>

                {/* Flashed Messages (Alerts) - Uncommented and adapted */}
                {alerts.length > 0 && (
                    <div className="space-y-2">
                        {alerts.map(({ id, category, message }) => (
                            <div
                                key={id}
                                className={`rounded-md p-4 bg-${category === 'error' ? 'red' : 'blue'}-50 border border-${category === 'error' ? 'red' : 'blue'}-200 text-${category === 'error' ? 'red' : 'blue'}-800`}
                            >
                                {message}
                                <button
                                    onClick={() => removeAlert(id)}
                                    className="float-right text-current hover:opacity-75"
                                    aria-label="Close"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="social-login space-y-3 mb-6">
                    <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            {/* Full Google icon */}
                        </svg>
                        Sign up with Google
                    </button>
                    <button
                        type="button"
                        className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            {/* Full Facebook icon */}
                        </svg>
                        Sign up with Facebook
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-50 text-gray-500">OR</span>
                    </div>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="csrf_token" value="" /> {/* Handle via API */}

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="e.g jamesjohnson"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="**********"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        {showPassword ? (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        )}
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-medium text-white mb-2">What are you registering as?</p>
                            <div className="flex flex-wrap gap-4 ">
                                {[
                                    { value: 'doctor', label: 'Doctor' },
                                    { value: 'patient', label: 'Patient' },
                                    { value: 'volunteer', label: 'Volunteer' },
                                ].map(({ value, label }) => (
                                    <label key={value} className="flex items-center ">
                                        <input
                                            type="radio"
                                            name="role"
                                            value={value}
                                            checked={formData.role === value}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-white focus:ring-indigo-500 border-gray-300 "
                                        />
                                        <span className="ml-2 text-sm text-white">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        </div>
                         <div className="text-center">
            <Link to="/signin" className="text-sm text-white  hover:text-blue-500">
              Login existing account
            </Link>
          </div>
                </form>
                
        
            </div>
        </div>
        
        </>
    )
}