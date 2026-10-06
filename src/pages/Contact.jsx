import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const inputClass =
  "mt-2 w-full border border-[#e5e1d8] bg-[#fffefa] px-4 py-3.5 text-sm text-[#26332f] outline-none transition placeholder:text-[#a3aaa4] focus:border-[#a87947] focus:ring-2 focus:ring-[#a87947]/10";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("mH9JEF9kHac6jizj-");
  }, []);

  const sendEmail = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const data = {
      firstName,
      lastName,
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      name: `${firstName} ${lastName}`.trim(),
    };

    setIsSending(true);
    try {
     await emailjs.send("service_c4ipcni", "template_oezxa8v", data);
      toast.success("Mesajınız başarıyla gönderildi. Teşekkür ederiz!");
      form.reset();
    } catch (error) {
      console.error("E-posta gönderilemedi:", error);
      toast.error("Mesajınız gönderilemedi. Lütfen tekrar deneyin.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="bg-[#f7f5f0] pt-[76px]">
      <section className="relative overflow-hidden bg-[#26332f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(181,138,92,0.24),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e8c69c] sm:text-xs">
            HOTEL SEVEN PARK · NEVŞEHİR
          </p>
          <h1 className="max-w-2xl text-4xl font-medium leading-tight text-white sm:text-5xl">
            Size yardımcı olmaktan mutluluk duyarız
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Konaklamanızla ilgili sorularınız veya özel talepleriniz için bize
            yazın. Ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-12">
        <div className="bg-white p-6 shadow-[0_12px_40px_rgba(38,51,47,0.06)] sm:p-10">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a87947] sm:text-xs">
            İLETİŞİM FORMU
          </p>
          <h2 className="mb-2 text-3xl font-medium text-[#26332f]">Bize yazın</h2>
          <p className="mb-8 text-sm leading-6 text-[#7b827c]">
            Formu doldurun, size yardımcı olalım.
          </p>

          <form onSubmit={sendEmail} className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-[#46524c]">
              Adınız <span className="text-[#a87947]">*</span>
              <input
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Adınız"
                className={inputClass}
                required
              />
            </label>
            <label className="text-sm font-medium text-[#46524c]">
              Soyadınız <span className="text-[#a87947]">*</span>
              <input
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Soyadınız"
                className={inputClass}
                required
              />
            </label>
            <label className="text-sm font-medium text-[#46524c]">
              E-posta adresiniz <span className="text-[#a87947]">*</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="ornek@eposta.com"
                className={inputClass}
                required
              />
            </label>
            <label className="text-sm font-medium text-[#46524c]">
              Telefon numaranız
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+90 5__ ___ __ __"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium text-[#46524c] sm:col-span-2">
              Konu
              <input
                name="subject"
                type="text"
                placeholder="Mesajınızın konusu"
                className={inputClass}
              />
            </label>
            <label className="text-sm font-medium text-[#46524c] sm:col-span-2">
              Mesajınız <span className="text-[#a87947]">*</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Size nasıl yardımcı olabiliriz?"
                className={`${inputClass} resize-y`}
                required
              />
            </label>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#26332f] px-8 text-xs font-semibold uppercase tracking-[0.13em] text-white transition hover:bg-[#a87947] disabled:cursor-wait disabled:opacity-60"
              >
                {isSending ? "Gönderiliyor..." : "Mesajı gönder"}
                {!isSending && <ArrowUpRight size={16} aria-hidden="true" />}
              </button>
              <p className="mt-3 text-xs text-[#89918b]">
                Yıldızlı alanların doldurulması zorunludur.
              </p>
            </div>
          </form>
        </div>

        <aside className="flex flex-col gap-5">
          <div className="bg-[#eee9df] p-6 sm:p-8">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a87947] sm:text-xs">
              BİZE ULAŞIN
            </p>
            <h2 className="mb-6 text-2xl font-medium text-[#26332f]">İletişim bilgilerimiz</h2>

            <a
              href="tel:+905438617965"
              className="group flex items-start gap-4 border-b border-[#d9d2c6] py-5 first:pt-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#a87947]">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[#7b827c]">Bizi arayın</span>
                <span className="mt-1 block text-sm font-semibold text-[#26332f] transition group-hover:text-[#a87947]">
                  +90549 213 49 79
                </span>
              </span>
            </a>

            <a
              href="https://wa.me/905438617965?text=Merhaba%2C%20oteliniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border-b border-[#d9d2c6] py-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#a87947]">
                <FaWhatsapp size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[#7b827c]">WhatsApp</span>
                <span className="mt-1 block text-sm font-semibold text-[#26332f] transition group-hover:text-[#a87947]">
                  Bize mesaj gönderin
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4 border-b border-[#d9d2c6] py-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#a87947]">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[#7b827c]">Konumumuz</span>
                <span className="mt-1 block text-sm font-semibold text-[#26332f]">
                  Nevşehir, Kapadokya
                </span>
              </span>
            </div>

            <div className="flex items-start gap-4 pt-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-[#a87947]">
                <Clock3 size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-[#7b827c]">Resepsiyon</span>
                <span className="mt-1 block text-sm font-semibold text-[#26332f]">
                  7 gün 24 saat hizmetinizde
                </span>
              </span>
            </div>
          </div>

          <div className="overflow-hidden border border-[#e5e1d8] bg-white p-2">
            <iframe
              title="Hotel Seven Park konumu, Nevşehir"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382911.6042335127!2d34.54701849263663!3d38.62665551552831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6e5db4849ea5%3A0xae28605225658ff6!2sHotel%20Seven%20Park!5e0!3m2!1str!2str!4v1771322902529!5m2!1str!2str&output=embed"
              className="h-64 w-full border-0 sm:h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Contact;
