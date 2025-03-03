import React from "react";

interface ComingSoonPageLayoutProps {
  setModalOpen: (isOpen: boolean) => void;
}

const ComingSoonPageLayout: React.FC<ComingSoonPageLayoutProps> = (
  {
    // setModalOpen,
  }
) => {
  // Function to handle HubSpot CRM integration.
  // const handleJoinWaitlist = () => {
  //   // Placeholder for HubSpot API or form submission
  //   // For example, using HubSpot's form submission API (simplified)

  //   const formData = {
  //     email: "user@example.com", // Replace with form input value or dynamic data
  //     firstName: "John", // Replace with dynamic first name
  //     lastName: "Doe", // Replace with dynamic last name
  //   };

  //   fetch(
  //     "https://api.hsforms.com/submissions/v3/integration/submit/YOUR_PORTAL_ID/YOUR_FORM_GUID",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         fields: [
  //           { name: "email", value: formData.email },
  //           { name: "firstname", value: formData.firstName },
  //           { name: "lastname", value: formData.lastName },
  //         ],
  //       }),
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //       setModalOpen(true); // Trigger modal after successful form submission
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  return (
    <div className="z-10 relative flex flex-col justify-end items-center pb-20 min-h-[100svh]">
      {/* Контейнер для заголовка та тексту "Coming Soon" */}
      <div className="space-y-4 w-full max-w-[900px] text-center animate-fadeIn">
        {/* <button
          onClick={handleJoinWaitlist}
          className="bg-[#B8A888] sm:mb-[20px] px-8 py-3 rounded-lg w-[448px] font-heading font-medium text-[#1A2B3C] text-[18px] text-center leading-[24px] transition-colors"
        >
          Join Waitlist
        </button> */}

        <h1 className="mx-auto font-heading text-[#D8E9FA] text-[44px] max-[375px]:text-[32px] max-[425px]:text-[36px] leading-[48px]">
          This Changes Everything...
        </h1>
        <p className="font-body text-[#B8A888] text-xl">Coming Soon</p>
      </div>

      <div className="right-10 bottom-4 absolute flex items-center space-x-2 animate-fadeIn">
        <img
          src="/icons/logo-white.svg"
          alt="Kamaharan Logo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ComingSoonPageLayout;
