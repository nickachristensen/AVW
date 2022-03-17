class CreatePortfolios < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
