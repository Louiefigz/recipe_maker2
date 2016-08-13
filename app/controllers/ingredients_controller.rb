class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all
    render json: ingredients
  end

  def show
  end
end
