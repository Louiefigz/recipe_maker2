class RecipesController < ApplicationController
  def index
    recipes = Recipe.all

    respond_to do |format|
      format.html
      format.json { render json: recipes}
    end
  end

  def show
    recipe = Recipe.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: recipe}
    end
  end
end
