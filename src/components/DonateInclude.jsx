import { useState } from 'react';
import donationImg from '../assets/images2/image-333.webp'; // Adjust path as needed

export default function DonateInclude() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        amount: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [copySuccess, setCopySuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Donate form submitted:', formData);
        // Add API call here, e.g., fetch('/api/donate', { method: 'POST', body: JSON.stringify(formData) });
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText('https://www.ghri/building-hospitals/donate?26y6N');
        setCopySuccess('Copied to clipboard!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
    };

    return (
        <section className="container mx-auto px-4 py-8 min-h-screen bg-white">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Donate</h3>
            </div>

            {/* Donation Process */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                    <img
                        src={donationImg}
                        alt="Donation Image"
                        className="img-fluid rounded-lg shadow-md w-full"
                    />
                </div>
                <div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
                        We are constructing state-of-the-art hospitals to provide quality healthcare services to communities in need.
                    </p>
                </div>
            </div>

            {/* How it Helps Us (Steps Section) */}
            <div className="donate-steps grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
                <div className="step p-6 bg-white rounded-lg shadow-md">
                    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg> {/* Hands Helping Icon */}
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">You Give</h5>
                    <p className="text-gray-700">
                        We receive your donations with every bit of love.
                    </p>
                </div>
                <div className="step p-6 bg-white rounded-lg shadow-md">
                    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg> {/* Hand Holding USD Icon */}
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">We Invest</h5>
                    <p className="text-gray-700">
                        We take those donations and invest them in life-changing projects.
                    </p>
                </div>
                <div className="step p-6 bg-white rounded-lg shadow-md">
                    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg> {/* People Carry Icon */}
                    <h5 className="text-xl font-semibold text-gray-900 mb-2">We Get Results</h5>
                    <p className="text-gray-700">
                        Your investments change the lives of millions.
                    </p>
                </div>
            </div>

            {/* Why We Need People */}
            <div className="mb-10 text-center">
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Why we need people</h4>
            </div>

            {/* How to Donate */}
            <div className="container my-5">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Donate</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Proin egestas urna eu mauris ultricies, ac facilisis nunc viverra.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>

            {/* Donation Form */}
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                    <div className="donation-form bg-light p-6 rounded-lg shadow-md mx-5 my-5">
                        <h3 className="text-center text-2xl font-bold mb-4">Donate</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input type="hidden" name="csrf_token" value="" /> {/* Handle via API */}

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="Enter your fullname"
                                    required
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Your Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone || ''}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                        placeholder="+234"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    Subject (optional)
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    value={formData.amount || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="#"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                    Card number
                                </label>
                                <input
                                    type="text"
                                    id="card-number"
                                    name="cardNumber"
                                    value={formData.cardNumber || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="1234 0938 0938 0984"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.expiryDate || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv || ''}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
                                    placeholder="CVV"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                            >
                                Donate Now
                            </button>
                        </form>
                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                onClick={copyToClipboard}
                                className="text-blue-600 underline"
                            >
                                Copy donation link
                            </button>
                            {copySuccess && (
                                <span className="ml-2 text-green-600">{copySuccess}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
)}