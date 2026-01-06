import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeHolder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 mb-2 font-medium">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeHolder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input Value : ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  const focusSecondInput = () => {
    secondInputRef.current.focus();
  };
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold ">Ref Props</h2>
      <p>
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code className="bg-gray-100 py-1 px-2 rounded text-sm">
          forwardRef
        </code>{" "}
        to pass refs to child components.
      </p>

      <div>
        <div className="bg-blue-50 rounded-lg p-6 mt-6">
          <h3 className="text-xl font-semibold py-2 my-2">Try it out:</h3> 
          <CustomInput
            ref={inputRef}
            label="First Input(with ref)"
            placeHolder="Type something"
          />
          <CustomInput
            ref={secondInputRef}
            label="Second Input(with ref)"
            placeHolder="Type something else..."
          />
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={focusInput}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Focus on First input
            </button>
            <button
              onClick={focusSecondInput}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Focus on Second input
            </button>
            <button
              onClick={getInputValue}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Get First input Value
            </button>
            <button
              onClick={clearInput}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Clear First input
            </button>
          </div>
        </div>
        <div className={`border-l-4 border-orange-500 bg-orange-50 p-6 rounded-lg shadow-md`}>
            <h2 className="text-lg font-semibold">When to use refs: </h2>
            <ul className="disc list-disc list-inside mt-2 text-gray-700">
                <li>Managing focus, text selection, or media playback.</li>
                <li>Triggering imperative animations.</li>
                <li>Integrating with third-party DOM libraries.</li>
            </ul>

        </div>
      </div>
    </section>
  );
};

export default RefProps;
