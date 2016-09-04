class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients
  has_many :recipe_categories
  has_many :categories, through: :recipe_categories


  def ingredients_attributes=(attr)

  end

end
