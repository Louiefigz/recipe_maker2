class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes 
  end

  def show
  end
end
