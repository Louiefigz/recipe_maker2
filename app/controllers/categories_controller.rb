class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def create

    category = Category.find_or_create_by(category_params)
    # if params[:recipe].present?
    #
    # end
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end

  def update
    
    category = Category.find(params[:category_id].to_i)
    category.recipe_categories.find_or_create_by(recipe_id: params[:recipe_id].to_i)
  end

  def destroy
    if params[:recipe_id].present?
      RecipeCategory.where(:recipe_id=>params[:recipe_id], :category_id=>params[:category_id]).destroy_all
    else
        Category.where(:id=>params[:category_id]).destroy_all
    end
  end

  private
  def category_params
    params.require(:category).permit(:name)
  end


end
