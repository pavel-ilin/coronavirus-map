class CreateProvinces < ActiveRecord::Migration[6.0]
  def change
    create_table :provinces do |t|
      t.string :title
      t.string :last_update
      t.integer :confirmed
      t.integer :deaths
      t.integer :recovered
      t.belongs_to :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
