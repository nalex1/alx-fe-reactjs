import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim())
      newErrors.ingredients = "Ingredients are required";
    if (!steps.trim())
      newErrors.steps = "Preparation steps are required";

    if (ingredients.split(",").length < 2) {
      newErrors.ingredients =
        "Ingredients must contain at least two items";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      title,
      ingredients,
      steps,
    };

    console.log("New Recipe:", newRecipe);

    setSuccess("Recipe added successfully!");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2"
            />
            {errors.title && (
              <p className="text-red-600 text-sm">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Ingredients (comma separated)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="3"
              className="w-full border rounded-lg p-2"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-600 text-sm">
                {errors.ingredients}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Preparation Steps
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="4"
              className="w-full border rounded-lg p-2"
            ></textarea>
            {errors.steps && (
              <p className="text-red-600 text-sm">
                {errors.steps}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Recipe
          </button>

          {success && (
            <p className="text-green-600 text-center">
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
