import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewPanel from "./components/ReviewPanel";
import ReviewButton from "./components/ReviewButton";

import { getCodeReview } from "./services/api";

function App() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const reviewCode = async () => {
    if (!code.trim()) return;

    try {
      setLoading(true);

      const response = await getCodeReview(code);

      console.log("Review received:", response);
      console.log(typeof response);

      setReview(response);
    } catch (error) {
      console.error(error);
      setReview("❌ Failed to review the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen w-full gap-4 bg-white p-6">
      {/* Left Panel */}
      <section className="relative flex-1 rounded-xl bg-black">
        <div className="h-full p-2">
          <CodeEditor code={code} setCode={setCode} />
        </div>

        <ReviewButton
          onClick={reviewCode}
          loading={loading}
        />
      </section>

      {/* Right Panel */}
      <section className="flex-1 rounded-xl">
        <ReviewPanel review={review} />
      </section>
    </main>
  );
}

export default App;