class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :ingredients
  has_many :recipes
end
