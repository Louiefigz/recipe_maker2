class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def create
    category = Category.find_or_create_by(category_params)
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end

  def update
    # cat.recipe_categories.create(recipe_id: recipe.id)
  end

  def destroy
    
    Category.where(:id=>params[:category_id]).destroy_all
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end


end
