class PortfoliosController < ApplicationController
    def index
        @portfolios = Portfolio.all
        render json: @portfolios, status: :ok
    end

    def show
        @portfolio = Portfolio.find(params[:id])
        render json: @portfolio, status: :ok
    end
end
