class CreatePlanes < ActiveRecord::Migration
  def change
    create_table :planes do |t|
      t.text :name
      t.text :row
      t.text :column

      t.timestamps null: false
    end
  end
end
