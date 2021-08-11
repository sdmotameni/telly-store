import React, { useState } from "react";

export default function Faq() {
  const [qStatus, setQStatus] = useState(false);

  const handleClick = () => {
    console.log(qStatus);
    setQStatus(!qStatus);
  };

  return (
    <section className="py-24 text-black bg-gray-50">
      <div className="max-w-4xl px-8 mx-auto lg:px-16">
        <h2 className="mb-2 text-xl font-bold text-center md:text-3xl">
          Frequently Asked Questions
        </h2>
      </div>
    </section>
  );
}
