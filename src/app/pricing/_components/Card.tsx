"use client";
import React from "react";
import { Check } from "lucide-react";

const PricingCards = () => {
  const plans = [
    {
      name: "Landing Page",
      price: "399K",
      description:
        "Optimalkan konversi dengan landing page yang menarik dan efektif! Kami desain untuk hasil maksimal.",
      features: [
        "Gratis Konsultasi",
        "Website Responsive",
        "1 Halaman",
        "Free SSL (https)",
        "Fitur CTA (Call To Action)",
        "Gratis Domain .xyz 1 tahun pertama",
        "Gratis Hosting",
      ],
      popular: true,
      buttonText: "Order Sekarang",
      whatsappMessage: "Hello, I'm interested in the Landing Page package!",
    },
    {
      name: "Personal Web",
      price: "599K",
      description:
        "Tampilkan diri Anda secara online dengan website pribadi yang unik dan profesional. Mulai branding diri sekarang!",
      features: [
        "Gratis Konsultasi",
        "Website Responsive",
        "5 Halaman",
        "Free SSL (https)",
        "Fitur CTA (Call To Action)",
        "Gratis Domain .xyz 1 tahun pertama",
        "Gratis Hosting",
      ],
      popular: false,
      buttonText: "Order Sekarang",
      whatsappMessage: "Hello, I'm interested in the Personal Web package!",
    },
    {
      name: "Company Profile",
      price: "1.299K",
      description:
        "Perkenalkan perusahaan Anda dengan profil profesional yang memukau. Membangun kepercayaan sejak pandangan pertama!",
      features: [
        "Gratis Konsultasi",
        "Website Responsive",
        "5 Halaman",
        "Free SSL (https)",
        "Fitur CTA (Call To Action)",
        "Gratis Custom Domain 1 tahun pertama",
        "Gratis Hosting",
      ],
      popular: false,
      buttonText: "Order Sekarang",
      whatsappMessage: "Hello, I'm interested in the Company Profile package!",
    },
  ];

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "6287785349292";
    const encodedMessage = encodeURIComponent(message);
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sesuaikan pilihan website dengan kebutuhan Anda untuk hasil yang
            maksimal.
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Harga yang sederhana dan transparan, berkembang bersama Anda.
          </p>
        </div>

        <div className="mt-16 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 xl:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 ${
                plan.popular
                  ? "border-blue-600 shadow-xl scale-105"
                  : "border-gray-200"
              } bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-200`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-8">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                    Popular
                  </span>
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    Rp {plan.price}
                  </span>
                </p>
                <p className="mt-6 text-gray-500">{plan.description}</p>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                }`}
                onClick={() => handleWhatsAppRedirect(plan.whatsappMessage)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
