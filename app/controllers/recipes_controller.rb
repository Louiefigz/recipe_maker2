
class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes

    # respond_to do |format|
    #   format.html
    #   format.json { render json: recipes}
    # end
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe
  end

  def create
    # add more validations here so repeate recipes aren't made
    recipe = Recipe.find_or_create_by(recipe_params)

    if recipe.save
      if params[:recipe][:category_id].present?
        recipe.recipe_categories.create(category_id: params[:recipe][:category_id].to_i)
      end
      render json: { message: 'Recipe successfully created' }
    else
      render json: { message: 'Recipe was not created' }
    end
  end

  def update
    # binding.pry

    recipe = Recipe.find(params[:id])
    if params[:ingredients].present?
      ingredient = Ingredient.find_or_create_by(name: params[:ingredients])
      recipe.recipe_ingredients.find_or_create_by(ingredient_id: ingredient.id)
    end

    if params[:recipe][:name].present?
    recipe.update(recipe_params)
    recipe.save
    end

  end

  def destroy
    # binding.pry
    if params[:ingredient_id].present?
      RecipeIngredient.where(:recipe_id=>params[:id].to_i, :ingredient_id=>params[:ingredient_id].to_i).destroy_all
    else
      Recipe.find(params[:recipe_id].to_i).delete
    end
  end
  private

    def recipe_params
      params.require(:recipe).permit(:name)
    end

    def ingredient_params
      params.require(:ingredients).permit(:name)
    end
end
