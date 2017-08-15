class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :uri
end
