class RemoveIngredientFromIngredients < ActiveRecord::Migration[5.0]
  def change
    remove_column :ingredients, :ingredient
  end
end
