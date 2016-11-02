class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def create
    # binding.pry`
    category = Category.find_or_create_by(category_params)
    # if params[:recipe].present?
    #
    # end
  end

  def show
    category = Category.find(params[:id])
    render json: category
  end


# Change this method
  def update
    # binding.pry

      category = Category.find(params[:id])
      category.update(name: params[:name])

  end

  def update_recipe_join
    # binding.pry
    category = Category.find(params[:id].to_i)
    if !category.recipe_categories.where(recipe_id: params[:recipe_id].to_i).present?
      category.recipe_categories.create(recipe_id: params[:recipe_id].to_i)
    end
    render json: {category: category, recipes: category.recipes}
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
