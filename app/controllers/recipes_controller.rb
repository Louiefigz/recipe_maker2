require 'pry'
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
    recipe = Recipe.create(recipe_params)
    if recipe.save
      render json: { message: 'Recipe successfully created' }
    else
      render json: { message: 'Recipe was not created' }
    end
  end

  def update
    # binding.pry

    recipe = Recipe.find(params[:id])
    ingredient = Ingredient.find_or_create_by(ingredient: ingredient_params)

    recipe.update(recipe_params)
    if recipe.save
      binding.pry
      if ingredient.present?
        # binding.pry
        recipe.recipe_ingredients.find_or_create_by(ingredient_id: ingredient.id)
      end
    end
  end

  def destroy

    if params[:ingredient_id]
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
      params.require(:ingredients).last[:ingredient]
    end
end
