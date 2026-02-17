import React,{useEffect} from 'react'
import PageBanner from '../components/PageBanner'
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  useEffect(() => {
    emailjs.init("V7C82ItrSsmXKyqn6");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      name: formData.get("firstName") + " " + formData.get("lastName"),
    };

    emailjs.send("service_qeoby8o", "template_ctm3plm", data)
      .then(() => {
        toast.success("Mesaj gönderildi!");
        e.target.reset();
      })
      .catch(err => {
        console.log("EMAILJS ERROR:", err);
        toast.error("Mesaj Gönderilemedi!");
      });
  };
  return (
   <div>

      {/* MAP */}
      <div className="w-full h-[400px] pt-[60px]">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382911.6042335127!2d34.54701849263663!3d38.62665551552831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6e5db4849ea5%3A0xae28605225658ff6!2sHotel%20Seven%20Park!5e0!3m2!1str!2str!4v1771322902529!5m2!1str!2str&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* CONTACT FORM */}
      <section className=" py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-5xl font-serif mb-16 text-gray-800">
            BİZE YAZIN
          </h2>

            <form onSubmit={sendEmail} className="grid md:grid-cols-2 gap-8">
      
      <input name="firstName" type="text" placeholder="Adınız" className="border p-4" />
      <input name="lastName" type="text" placeholder="Soyadınız" className="border p-4" />
      <input name="email" type="email" placeholder="E-Posta" className="border p-4" />
      <input name="phone" type="text" placeholder="Telefon" className="border p-4" />
      <input name="subject" type="text" placeholder="Konu" className="md:col-span-2 border p-4" />
      <textarea name="message" rows="6" placeholder="Mesaj" className="md:col-span-2 border p-4" />

      <div className="md:col-span-2 text-center mt-6">
        <button type="submit" className="bg-[#3f6e8c] text-white px-12 py-4">
          GÖNDER
        </button>
      </div>

    </form>
        </div>
      </section>
    </div>
  )
}


export default Contact
