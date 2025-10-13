import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function OrderConfirm() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl bg-white shadow-lg rounded-2xl p-8 text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-600 w-16 h-16" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Thank You for Your Online Order!
        </h1>

        {/* Message */}
        <p className="text-gray-700 leading-relaxed mb-6">
          Your order will be ready for pick up after{" "}
          <span className="font-semibold text-gray-900">
            Saturday, December 13, 2025
          </span>{" "}
          at <span className="font-semibold text-gray-900">Jimmy's of Watertown</span>, 1067 Main Street, Watertown, CT.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          If you have any questions, please email us or call{" "}
          <span className="font-semibold text-gray-900">Courtney at 203.233.9115 or email us at Jimmysofwatertown@yahoo.com</span>.
        </p>

        {/* Signature */}
        <p className="text-gray-800 font-medium italic">Sincerely,</p>
        <p className="text-gray-900 font-semibold">The Ligi Family</p>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Return Home
          </a>
        </div>
      </motion.div>
    </section>
  );
}
