const Input = ({ label, placeholder, type = "text", onChange }) => {
  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
      />
    </div>
  );
};

export default Input;