import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const ReviewPanel = ({ review }) => {
  return (
    <div className="h-full w-full overflow-auto rounded-xl bg-[#343434] p-6 text-white">
      {review ? (
        <div className="prose prose-invert max-w-none">
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center text-center text-gray-400">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              AI Code Review
            </h2>
            <p className="text-sm">
              Click the <span className="font-medium text-white">Review</span>{" "}
              button to analyze your code.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPanel;