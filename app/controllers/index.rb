get '/' do
  @places = Place.all
  erb :index
end

post '/places/create' do 
  @place = Place.create(params[:place])
  redirect "/"
end

get '/places/:id/show' do
  @place = Place.find(params[:id])
  erb :show
end
