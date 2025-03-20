import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, ShoppingBag, HelpCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    orderNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Description Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Our Support Team</h2>
        <p className="text-gray-600 mb-4">
          Have a question about your order or our products? We're here to help!
          Our customer service team typically responds within 24 hours.
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center">
            <ShoppingBag className="w-4 h-4 mr-2" />
            <span>Order Support</span>
          </div>
          <div className="flex items-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span>Product Inquiries</span>
          </div>
        </div>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-sm gap-6 mb-8">
        <div className="flex items-center cursor-pointer space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <Mail className="text-blue-600 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-800">Email Support</h3>
            <p className="text-gray-600">kaushikmukherjee2709@gmail.com</p>
            <p className="text-xs text-gray-500 mt-1">Replies within 24 hours</p>
          </div>
        </div>
        
        <div className="flex items-center cursor-pointer space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <Phone className="text-blue-600 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-800">Phone Support</h3>
            <p className="text-gray-600">+857484654</p>
            <p className="text-xs text-gray-500 mt-1">Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
        
        <div className="flex items-center cursor-pointer space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
          <MapPin className="text-blue-600 w-6 h-6" />
          <div>
            <h3 className="font-semibold text-gray-800">Main Office</h3>
            <p className="text-gray-600">New York, NY</p>
            <p className="text-xs text-gray-500 mt-1">Flagship Store Location</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <div className="relative">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="Your name"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-gray-700 mb-2" htmlFor="orderNumber">Order Number (Optional)</label>
          <div className="relative">
            <ShoppingBag className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="orderNumber"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="e.g., ORD-1234567"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition min-h-[120px]"
              placeholder="Describe your issue or question..."
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default ContactUs;