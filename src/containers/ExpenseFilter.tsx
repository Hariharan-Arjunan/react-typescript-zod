interface Props {
  onSelectedCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectedCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectedCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Entertainment">Enternainment</option>
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
    </select>
  );
};

export default ExpenseFilter;
