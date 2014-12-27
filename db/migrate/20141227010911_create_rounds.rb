class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.decimal :drinks, precision: 8, scale: 2
      t.decimal :hours, precision: 8, scale: 2
      t.decimal :bac, precision: 8, scale: 2
      t.string :sex
      t.decimal :rate, precision: 8, scale: 2
      t.integer :lbs
      t.decimal :abv, precision: 8, scale: 2

      t.timestamps
    end
  end
end
