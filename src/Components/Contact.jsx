import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl font-semibold"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tighter space-y-6 text-lg">
        {/* Address */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CONTACT.address}
        </motion.p>

        {/* Phone Number */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5}}
        >
          {CONTACT.phoneNo}
        </motion.p>

        {/* Email with Gmail compose link */}
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5}}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-b border-neutral-600 hover:text-white hover:border-white transition"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
