"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: "", email: "", message: "" });

          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          setLoading(false);
          console.error("Email failed:", error);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white dark:from-[#0b0d1a] dark:to-[#0f1121]">
      <div className="max-w-2xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Let’s Work Together
        </motion.h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Interested in hiring me? Drop me a message and I’ll get back to you shortly.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 text-left flex flex-col justify-center items-center gap-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div className="flex w-full gap-10 flex-col md:flex-row">   
                 <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-500 w-full border dark:border-gray-100 shadow-sm placeholder:text-sm px-3 py-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-500 w-full border dark:border-gray-100 shadow-sm placeholder:text-sm px-3 py-2"
          />
            </div>
         
          <textarea
            placeholder="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            className="rounded-xl border-gray-500 w-full border dark:border-gray-100 shadow-sm min-h-[150px] px-3 py-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl dark:hover:bg-gray-200 dark:hover:text-black cursor-pointer dark:bg-primary px-5 py-2 dark:text-white border dark:border-gray-100 bg-gray-400 text-gray-800 hover:bg-gray-200 hovertext-black "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          
        
        </motion.form>

        {success && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-600 dark:text-green-400"
          >
            ✅ Message sent successfully!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Contact;
