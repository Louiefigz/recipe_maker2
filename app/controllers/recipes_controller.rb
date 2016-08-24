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
    recipe = Recipe.create(params)
    if recipe.save
      render json: { message: 'Recipe successfully created' }
    else
      render json: { message: 'Recipe was not created' }
    end
  end
end
