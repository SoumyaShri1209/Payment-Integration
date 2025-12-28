# Next.js Razorpay Payment Integration

This is a simple full-stack project built with **Next.js** that demonstrates how to integrate the **Razorpay payment gateway**.

The project covers creating an order on the backend, opening the Razorpay checkout on the frontend, and securely verifying the payment after success.

---

## 🚀 Features
- Razorpay payment gateway integration
- Server-side order creation
- Secure payment verification using signature
- Test mode payments (no real money)
- Responsive UI using grid layout
- Reusable product/order components

---

## 🛠 Tech Stack
- Next.js (App Router)
- React
- Razorpay API
- Tailwind CSS
- JavaScript

---

## ⚙️ Setup Instructions

1. Clone the repository
git clone https://github.com/your-username/nextjs-razorpay-payment.git

2. Go into the project folder
cd nextjs-razorpay-payment

3. Install dependencies
npm install

4. Create environment variables file
Create a file named `.env.local` in the root directory and add:

NEXT_PUBLIC_RAZORPAY_KEY=rzp_test_xxxxxxxxx
RAZORPAY_SECRET=xxxxxxxxxxxxxxxx

⚠️ Do not commit this file to GitHub.

5. Run the development server
npm run dev

6. Open the application in browser
http://localhost:3000

🧪 Payment Testing:
- Uses Razorpay Test Mode
- No real money is transferred
- UPI, wallets, and cards can be tested safely
