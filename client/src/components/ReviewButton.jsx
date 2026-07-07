const ReviewButton = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`absolute bottom-4 right-4 rounded-lg px-8 py-2 font-medium transition-all duration-200
        ${
          loading
            ? "cursor-not-allowed bg-gray-400 text-gray-700"
            : "bg-[#dbdbff] text-black hover:bg-[#c7c7ff] active:scale-95"
        }`}
    >
      {loading ? "Reviewing..." : "Review"}
    </button>
  );
};

export default ReviewButton;