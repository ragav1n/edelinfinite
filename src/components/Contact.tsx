import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const env = typeof process !== 'undefined' ? process.env : {};
    const serviceId = env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration. Please check your environment variables.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return; // Early return for missing config
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const departments = [
    {
      title: 'Pre-Construction',
      contacts: [
        { name: 'Anwar Mir', email: 'anwar.mir@edel-infinite.de' },
        { name: 'Janardhan Reddy', email: 'janardhan@edel-infinite.de' }
      ]
    },
    {
      title: 'Sales & Marketing',
      contacts: [
        { name: 'Inder Kaul', email: 'inder.kaul@edel-infinite.de' },
        { name: 'Musaveer Ahmed', email: 'musaveer.ahmed@edel-infinite.de' }
      ]
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Contact Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team to discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-2xl font-bold text-black mb-8">Send us a Message</h3>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6">
                Failed to send message. Please check your details and try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="project">Project Consultation</option>
                  <option value="careers">Careers</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Info</h3>

            <div className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-lg text-black mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        India Office
                      </h4>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p className="font-semibold">Edelinfinite Systems Pvt Ltd</p>
                        <p>#1, Hennur Road, Geddalahalli</p>
                        <p>BDS Garden – Bangalore 560077</p>
                        <p className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-orange-500" />
                          080-46990561
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-black mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-500" />
                        Germany Office
                      </h4>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p className="font-semibold">Edelinfinite GmBH</p>
                        <p>Tölzer Straße 11</p>
                        <p>82031, Grünwald</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h4 className="font-bold text-lg text-black mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-orange-500" />
                    Email
                  </h4>
                  <a
                    href="mailto:info@edel-infinite.de"
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm"
                  >
                    info@edel-infinite.de
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-auto">
                <h4 className="font-bold text-lg text-black mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[Linkedin, Facebook, Twitter, Instagram].map((Icon, index) => (
                    <button
                      key={index}
                      className="w-10 h-10 bg-black hover:bg-orange-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-10 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Department Contacts</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl">
                <h4 className="font-semibold text-orange-500 mb-4 text-lg">{dept.title}</h4>
                <div className="space-y-3">
                  {dept.contacts.map((contact, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-white">{contact.name}</p>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">Find Us</h3>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17856.534870681506!2d77.63563314601156!3d13.057311523476878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1742e3afc6e1%3A0xc60ec02b16a48e18!2sEDELINFINITE%20SYSTEMS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1760279873278!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Edelinfinite Systems Location"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're always on the lookout for passionate and talented people to join our team.
            If you're driven to make an impact, we'd love to hear from you.
          </p>
          <a
            href="mailto:info@edel-infinite.de"
            className="inline-block bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Careers
          </a>
        </div>
      </div>
    </section>
  );
}
