import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-700">
      <button
        className="p-4 font-bold text-gray-200 bg-purple-600 rounded-xl"
        onClick={() => router.push("/app")}
      >
        Go to D3 app
      </button>
    </div>
  );
}
