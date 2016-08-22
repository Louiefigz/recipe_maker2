class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all

    render json: ingredients

    # respond_to do |format|
    #   format.html
    #   format.json { render json: ingredients}
    # end
  end

  def show
    ingredient = Ingredient.find(params[:id])
  end
end
