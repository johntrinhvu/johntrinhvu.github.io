import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks.tsx";

export default function Contact() {
    const { ref } = useSectionInView("contact", 0.25);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_bibznh1', 'template_k1ob8l9', form.current, 'Dg3GWQS7_7_gHJryh')
        .then(() => {
          alert("Message Sent!");
        },
        (error) => {
          alert(error.text);
        },
        );
        e.target.reset();
    };

    return (
        <motion.section 
            id="contact" 
            className="relative"
            ref={ref}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe 
                      width="100%"
                      height="100%"
                      title="map"
                      className="absolute inset-0"
                      frameborder={0}
                      marginheight={0}
                      marginwidth={0}
                      style={{ filter: "opacity(0.86)" }}
                      src="https://www.google.com/maps/embed/v1/place?q=UCI,+Irvine,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                University of California, Irvine <br />
                                Irvine, CA 92697
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <button className="text-purple-400 leading-relaxed">
                                johntv3@uci.edu
                            </button>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">
                                +1 (626) 372-0818
                            </p>
                        </div>
                    </div>
                </div>
                <form
                  ref={form}
                  name="contact"
                  onSubmit={sendEmail}
                  className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="sm:text-4xl text-3xl mb-1 font-semibold title-font text-gray-100">
                        Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                    If you have any questions, I'd love to hear from you.
                    Please feel free to reach out by filling in the form below with your name, 
                    email, and a brief message.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        //   onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        //   onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="phone" className="leading-7 text-sm text-gray-400">
                            phone
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="user_phone"
                          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        //   onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        //   onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit" value="Send" className="text-purple-100 bg-purple-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg hover:text-white transition ease-in duration-100">
                        submit
                    </button>
                </form>
            </div>
        </motion.section>
    );
}