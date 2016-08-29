class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all

    render json: ingredients

    # respond_to do |format|
    #   format.html
    #   format.json { render json: ingredients}
    # end
  end

  def create
    ingredient = Ingredient.find_or_create_by(ingredient: params[:ingredient])
  end 

  def show
    ingredient = Ingredient.find(params[:id])
  end

  
end
