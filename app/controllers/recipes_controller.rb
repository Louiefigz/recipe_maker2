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
    binding.pry
    recipe = Recipe.create(recipe_params)
    if recipe.save
      render json: { message: 'Recipe successfully created' }
    else
      render json: { message: 'Recipe was not created' }
    end
  end

  def update
    recipe = Recipe.find(params[:id])
    if ingredient_params.present?
      recipe.ingredients.find_or_create_by(ingredient: ingredient_params)
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
