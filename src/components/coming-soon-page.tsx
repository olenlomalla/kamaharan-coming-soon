import React from "react";
import { Mail } from "lucide-react";
import { DynamicBackgroundGrid } from "./dynamic-background-grid";
import { backgroundImages } from "./config";
import "./coming-soon.css";

export const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  React.useEffect(() => {
    const launchDate = new Date('2025-02-15T00:00:00')
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate.getTime() - now
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const openTypeform = () => {
    // Replace with your Typeform URL
    window.open('YOUR_TYPEFORM_URL', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <DynamicBackgroundGrid columns={backgroundImages} />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[600px] mx-auto text-center space-y-8">
          <div className="text-3xl font-bold font-syne logo">
            Kamaharan
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-syne main-heading">
            Discover London's Finest Local Businesses
          </h1>
          
          <p className="text-xl timer-label">
            Launch Date: February 15, 2025
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINS', value: timeLeft.minutes },
              { label: 'SECS', value: timeLeft.seconds }
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl md:text-3xl font-bold timer-digit">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm timer-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              <button
                onClick={openTypeform}
                className="h-12 px-8 rounded-lg font-medium submit-button w-full"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          <p className="text-sm timer-label">
            Join us in connecting London's communities with local businesses
          </p>
        </div>
      </div>
    </div>
  )
}