class ProvinceSerializer < ActiveModel::Serializer
  attributes :id, :title, :last_update, :confirmed, :deatsh, :recoverede
  has_one :contry
end
