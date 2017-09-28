json.user do
  json.(@user, :id, :email, :password)
end
json.token(Auth.create_token(@user.id))