import { useState } from "react";

const Button = ({ text, color, size, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
      ${size === "small" ? "text-sm px-2 py-1 my-4" : ""}
      ${size === "large" ? "text-lg px-8 py-3" : ""}
      ${size !== "small" && size !== "large" ? "text-xl px-4 py-2" : ""}
      ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : ""}
      ${color === "secondary" ? "bg-gray-500 text-white hover:bg-gray-600" : ""}
      ${color === "danger" ? "bg-red-500 text-white hover:bg-red-600" : ""}
      ${color === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {text}
    </button>
  );
};

const BasicProps = () => {
  const [countClick, setCountClick] = useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Basic props</h2>
      <p>
        Props are arguments passed to the React components. They allow you to
        pass data from Parent to Child component.
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-700 my-3">
          Different colors
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text={"Primary button"}
            color={"primary"}
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text={"Secondary button"}
            color={"secondary"}
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text={"Danger button"}
            color={"danger"}
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text={"Success button"}
            color={"success"}
            onClick={() => setCountClick(countClick + 1)}
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-700 my-3">
          Different sizes
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text={"Small"}
            color="primary"
            size="small"
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text="Medium(default)"
            color={"primary"}
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text="Large"
            color="primary"
            size="large"
            onClick={() => setCountClick(countClick + 1)}
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-700 my-3">
          Disabled states
        </h3>
        <div className="flex flex-wrap gap-3">
          <Button
            text="Enabled button"
            color="primary"
            onClick={() => setCountClick(countClick + 1)}
          />
          <Button
            text="Disabled button"
            color="primary"
            disabled={true}
            onClick={() => alert("This should not happen")}
          />
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-lg font-medium text-gray-700">
              Click Count:{""}
              <span className="text-blue-600 font-bold">{countClick}</span>
            </p>
            <button
              className="bg-gray-300 text-black mx-2 px-4 rounded"
              onClick={() => setCountClick(0)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicProps;
