class Recipe < ApplicationRecord
  has_many :recipe_ingredients
  has_many :ingredients, through: :recipe_ingredients


  def ingredients_attributes=(attr)
    binding.pry
  end

end
