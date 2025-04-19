import { ChangeEvent, FC, FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ToastMessage {
  title: string;
  description: string;
  variant?: string;
}

const ContactForm: FC = () => {
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/22558485/2x6fh6e/";
  const stripeLink = "https://book.stripe.com/fZe14H13f4j54bmdQQ";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<ToastMessage>({
    title: "",
    description: "",
    variant: "",
  });
  const [showToast, setShowToast] = useState<boolean>(false);

  // Function to show toast messages
  const toast = ({ title, description, variant = "" }: ToastMessage): void => {
    setToastMessage({ title, description, variant });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24-48 hours.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="relative overflow-hidden">
      {/* Unified approach with responsive styling */}
      <div className="relative w-full bg-white">
        {/* Image container - changes position based on screen size */}
        <div className="absolute inset-0 z-0 md:inset-auto md:left-0 md:top-0 md:h-full md:w-auto md:-translate-x-1/4 md:transform">
          <img
            src="/images/Brothers Side Profile.png"
            alt="Brothers Side Profile"
            className="h-full w-full object-cover md:h-full md:w-auto"
          />
          {/* Overlay for mobile only */}
          <div className="absolute inset-0 bg-black bg-opacity-45 md:hidden"></div>
        </div>

        {/* Content container */}
        <div className="container relative z-10 mx-auto px-4 py-10 md:py-16 md:pl-32">
          {/* On mobile: White background container for better readability */}
          <div className="rounded-xl bg-white/90 p-6 shadow-2xl md:rounded-none md:bg-transparent md:bg-opacity-100 md:p-0 md:shadow-none">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:gap-4">
                  <h2 className="heading-md mb-4 text-umrah-darkPurple md:mb-0">
                    Ready to Join Us?
                  </h2>
                  <a
                    href={stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-umrah-gold px-6 py-3 font-bold uppercase text-umrah-darkPurple shadow-md transition-all hover:bg-opacity-90 hover:shadow-lg"
                  >
                    RESERVE YOUR SPOT
                  </a>
                </div>
                <p className="mb-6 text-gray-700">
                  Have questions or need more information about our Brothers
                  Umrah Journey or the Kamaharan Development programme? Reach
                  out to us!
                </p>
                <div className="mb-6 space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-umrah-purple/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-umrah-purple"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <span className="text-gray-700"> 0203 4888 903</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-umrah-purple/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-umrah-purple"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Support@kamaharan.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-umrah-purple/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-umrah-purple"
                      >
                        <path d="M8 3v4l1.5-1.5L11 7V3" />
                        <path d="M3 12h1l2-4 2 4h12" />
                        <path d="M14 8h-4a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-4" />
                        <path d="M12 16v4" />
                      </svg>
                    </div>
                    <span className="text-gray-700">WhatsApp:</span>
                  </div>
                  <div className="ml-14">
                    <img
                      src="/images/Whatsapp Qrcode.png"
                      alt="WhatsApp QR Code"
                      className="h-36 w-36 object-contain"
                    />
                    <span className="text-sm text-gray-700">
                      Scan to message us on WhatsApp
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="rounded-lg bg-white p-6 shadow-lg"
                >
                  <h3 className="mb-6 text-xl font-semibold">
                    Send Us a Message
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-umrah-purple px-4 py-2 text-white transition-colors hover:bg-umrah-darkPurple"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      {showToast && (
        <div
          className={`fixed bottom-4 right-4 z-50 rounded-md p-4 text-white shadow-lg ${
            toastMessage.variant === "destructive"
              ? "bg-red-500"
              : "bg-green-500"
          }`}
        >
          <h4 className="font-bold">{toastMessage.title}</h4>
          <p>{toastMessage.description}</p>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
