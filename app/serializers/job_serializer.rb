class JobSerializer < ActiveModel::Serializer
  attributes :title, :snippet, :link, :likes, :cacheId
end
