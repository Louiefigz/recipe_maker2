class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories
  end

  def create
  end

  
end
