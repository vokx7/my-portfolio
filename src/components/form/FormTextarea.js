import FieldErrors from "./FieldErrors";

const FormTextarea = ({ label, name, value, onChange, errors }) => {
  return (
    <div className="flex flex-col text-main-text-light dark:text-main-text-dark">
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="border-b-2 h-30 border-b-primary outline-none caret-primary"
      />
      <FieldErrors errors={errors} />
    </div>
  );
};

export default FormTextarea;
