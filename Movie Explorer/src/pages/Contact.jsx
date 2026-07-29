import React from "react";

const Contact = () => {
  return (
    <main className="min-h-[70vh] flex justify-center items-center px-6">
      <div className="w-full max-w-lg bg-[#B20710] rounded-2xl shadow-2xl shadow-black/40 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact</h1>

        <form>
          <div  className="mb-6">
            <label className="block mb-2" >Name</label>

            <input type="text" placeholder="Enter your name" className="w-full rounded-xl bg-[#7c040a] px-3 py-2 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white"/>
          </div>



          <div  className="mb-6">
            <label className="block mb-2">Email</label>

            <input type="email" placeholder="Enter your email" className="w-full rounded-xl bg-[#7c040a] px-3 py-2 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white" />
          </div>


          <div  className="mb-6">
            <label className="block mb-2">Message</label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="bg-[#7c040a] px-4 py-3 h-32 overflow-hidden rounded-xl focus:outline-2 w-full focus:outline-[#000000] focus:ring-2 focus:ring-white placeholder:text-gray-300" 
            ></textarea>
          </div>



          <button type="submit" className="bg-[#7c040a] w-full py-2 rounded-2xl font-bold mt-6 hover:bg-[#600307] transition-colors duration-300">Send</button>
        </form>

      </div>
    </main>
  );
};

export default Contact;