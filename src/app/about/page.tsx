import GoBackButton from "../../components/GoBackButton";
export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700 text-lg">
        Welcome to My Blog! Here, I share insights on web development, programming, and technology. 
        My goal is to help others learn and grow in the tech world. Thanks for visiting!
      </p>
         <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <GoBackButton />
    </div>
    </main>
  );
}