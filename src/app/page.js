

'use client';

import Script from "next/script";
import OrderBox from "./components/OrderBox/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 p-8 font-sans">

      {/* Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      {/* GRID CONTAINER */}
      <main className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <OrderBox
          name="Best Seller Book"
          price={1500}
          image="https://imgs.search.brave.com/h5NFpaSVcXL6ICn2PcBrCw17_EFoGozbmE-JvPY_za4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDI0/LzA2LzMwL2Jvb2tz/L2Jvb2tzLWV4dHJh/LWpqampzLTA2LWZs/YXQtc2xpZGUtOVVY/MC9ib29rcy1leHRy/YS1qampqcy0wNi1m/bGF0LXNsaWRlLTlV/WDAtbWFzdGVyMzE1/LnBuZw"
        />

        <OrderBox
          name="Anarkali Dress"
          price={500}
          image="https://imgs.search.brave.com/_xsV6XELenQ5vFFe9IM0EuL3Gmjsvc5L_mhixfZLwhQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvNTQ4MTQ5/OTc5LzBhaWlhXzUx/Mi53ZWJwP3dpZHRo/PTM2MA"
        />

           <OrderBox
          name="Leather Bag"
          price={1000}
          image="https://imgs.search.brave.com/odnuuyOoHesu-MgAfojbiIwquDqHWyURgdp8zPPbarQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/bGVhdGhlci1iYWct/bW9ja3VwLXdvbWVu/MzlzLWFjY2Vzc29y/eS1wc2RfNTM4NzYt/MTA4MTM1OS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA"
        />

      </main>
    </div>
  );
}


