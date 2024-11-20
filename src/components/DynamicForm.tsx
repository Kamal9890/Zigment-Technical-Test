import { useForm } from "react-hook-form";

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    pattern: string;
    message: string;
  };
}

interface Schema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface DynamicFormProps {
  schema: Schema;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  const renderField = (field: Field) => {
    switch (field.type) {
      case "text":
      case "email":
        return (
          <div key={field.id} className="mb-6">
            <label htmlFor={field.id} className=" mb-2 font-medium">
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              {...register(field.id, {
                required: field.required ? "This field is required" : false,
                pattern: field.validation?.pattern
                  ? {
                      value: new RegExp(field.validation.pattern),
                      message: field.validation.message,
                    }
                  : undefined,
              })}
              placeholder={field.placeholder}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">
                {/* {errors[field.id]?.message || "This field is required"} */}
              </p>
            )}
          </div>
        );

      case "select":
        return (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block mb-1 font-semibold">
              {field.label}
            </label>
            <select
              id={field.id}
              {...register(field.id, { required: field.required })}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">
                {/* {errors[field.id]?.message || "This field is required"} */}
              </p>
            )}
          </div>
        );

      case "radio":
        return (
          <div key={field.id} className="mb-4">
            <label className="block mb-1 font-semibold">{field.label}</label>
            {field.options?.map((option) => (
              <div key={option.value} className="flex items-center mb-2">
                <input
                  id={`${field.id}-${option.value}`}
                  type="radio"
                  value={option.value}
                  {...register(field.id, { required: field.required })}
                  className="mr-2"
                />
                <label htmlFor={`${field.id}-${option.value}`}>
                  {option.label}
                </label>
              </div>
            ))}
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">
                {/* {errors[field.id]?.message || "This field is required"} */}
              </p>
            )}
          </div>
        );

      case "textarea":
        return (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block mb-1 font-semibold">
              {field.label}
            </label>
            <textarea
              id={field.id}
              {...register(field.id, { required: field.required })}
              placeholder={field.placeholder}
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field.id] && (
              <p className="text-red-500 text-sm mt-1">
                {/* {errors[field.id]?.message || "This field is required"} */}
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className= "max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-10 text-center">{schema?.formTitle || "Form"}</h2>
      <p className="mb-6 text-red-600 text-center">{schema?.formDescription}</p>
      {schema?.fields?.map(renderField)}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;
