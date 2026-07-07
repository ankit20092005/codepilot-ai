import CodeEditor from "@uiw/react-textarea-code-editor";

const Editor = ({ code, setCode }) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl bg-[#0c0c0c]">
      <CodeEditor
        value={code}
        language="javascript"
        placeholder="Write your code here..."
        onChange={(e) => setCode(e.target.value)}
        padding={15}
        data-color-mode="dark"
        style={{
          backgroundColor: "#0c0c0c",
          fontFamily: '"Fira Code", monospace',
          fontSize: 16,
          color: "#ffffff",
          minHeight: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Editor;