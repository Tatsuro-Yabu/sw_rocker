Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "lockers#index"
  get "lockers", to: "lockers#index"
  get "lockers/show", to: "lockers#show"
  get "lockers/play", to: "lockers#play"
end
