import Layout from "../components/layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mt-20">Welcome to Splash App 🌊</h1>
      <p className="text-center mt-4 text-gray-600">
        Explore the modern web with Next.js, Tailwind, and TypeScript!
      </p>
    </Layout>
  );
}
