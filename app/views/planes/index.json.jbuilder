json.array!(@planes) do |plane|
  json.extract! plane, :id, :name, :row, :column
  json.url plane_url(plane, format: :json)
end
