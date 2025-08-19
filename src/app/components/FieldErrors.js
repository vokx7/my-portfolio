const FieldErrors = ({ errors }) => {
  if (errors.length === 0) return null;
  return (
    <ul>
      {errors.map((error, index) => (
        <li key={index} className="text-red-600">
          {error}
        </li>
      ))}
    </ul>
  );
};

export default FieldErrors;
