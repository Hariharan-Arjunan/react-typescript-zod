import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  description: z.string().min(3, { message: "Name must be atleast 3 letters" }),
  amount: z.number().min(10),
  category: z.string(),
});
interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: Expense) => void;
}

type FormData = z.infer<typeof schema>;

const ExpenseListForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const expenseCategoryList = ["hai", "Hari"] as const;
  // const handleFormSubmit = (values: FieldValues) => {
  //   console.log(values);
  //   onSubmit(values);
  //   reset();
  // };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors?.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors?.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            defaultValue="default"
            {...register("category")}
          >
            <option value="default" disabled hidden>
              Choose your category
            </option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors?.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseListForm;
