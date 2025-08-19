const { default: FieldErrors } = require("./FieldErrors");

const FormField = ({ name, errors, value, label, type, onChange }) => {
  return (
    <div className="flex-1 flex flex-col">
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="border-b-2 border-b-primary outline-none caret-primary"
      />
      <FieldErrors errors={errors} />
    </div>
  );
};

export default FormField;
