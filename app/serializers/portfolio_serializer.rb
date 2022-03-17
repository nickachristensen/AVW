class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :category
end
