class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :recipes
  # has_many :ingredients, through: :recipes
end
