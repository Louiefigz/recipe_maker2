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
    # binding.pry
    if params[:category_id].present?
      category = Category.find(params[:category_id].to_i)
      if category.recipe_categories.where(recipe_id: params[:recipe_id].to_i).present?
        existingRecipe = Recipe.find_by(id: params[:recipe_id]).name
      else
        category.recipe_categories.create(recipe_id: params[:recipe_id].to_i)
      end
    else
      category = Category.find(params[:id])
      category.update(name: params[:name])
    end
  end

  def destroy
    # binding.pry 
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
