Rails.application.routes.draw do
  resources :portfolios
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/portfolio", to: "portfolios#index"
end
