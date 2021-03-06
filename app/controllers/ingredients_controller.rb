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
    ingredient = Ingredient.find_or_create_by(name: params[:name].strip)
  end

  def show
    ingredient = Ingredient.find(params[:id])
  end

  def destroy

    Ingredient.find(params[:ingredient_id].to_i).delete
  end


end
