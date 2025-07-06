'use client';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
 type FormFields = 'name' | 'email' | 'subject' | 'message';

const [formData, setFormData] = useState<Record<FormFields, string>>({
  name: '',
  email: '',
  subject: '',
  message: ''
});

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="bg-[#f9f9fb] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#232536]">Get In Touch</h1>
          <p className="text-lg text-gray-600">Have a question, suggestion, or just want to say hello? We had love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#232536]">Contact Information</h2>
            <div className="space-y-6">
              <ContactItem icon={<FiMail className="text-xl" />} label="Email" value="hello@carblog.com" />
              <ContactItem icon={<FiPhone className="text-xl" />} label="Phone" value="+1 (555) 123-4567" />
              <ContactItem
                icon={<FiMapPin className="text-xl" />}
                label="Address"
                value="123 Car Street\nAuto City, AC 12345"
              />
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4 text-gray-700">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebookF />, color: 'text-blue-600' },
                  { icon: <FaTwitter />, color: 'text-sky-500' },
                  { icon: <FaInstagram />, color: 'text-pink-500' },
                  { icon: <FaLinkedinIn />, color: 'text-blue-800' }
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 border border-gray-300 hover:bg-[#232536] text-[#232536] hover:text-white rounded-full flex items-center justify-center transition-colors text-lg`}
                  >
                    {item.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'subject'].map(field => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-semibold mb-2 capitalize text-[#232536]">
                    {field} *
                  </label>
                  <input
                    id={field}
                    name={field}
                    type={field === 'email' ? 'email' : 'text'}
                    value={formData[field as FormFields]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors[field] ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-[#232536] focus:border-transparent`}
                    placeholder={`Enter your ${field}`}
                  />
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#232536]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-[#232536] focus:border-transparent resize-none`}
                  placeholder="Write your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#232536] text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors"
              >
              Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-[#232536] text-white rounded-lg flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="font-semibold text-[#232536]">{label}</h3>
        <p className="text-gray-600 whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}
