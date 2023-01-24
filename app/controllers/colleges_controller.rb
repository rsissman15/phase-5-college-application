class CollegesController < ApplicationController
    before_action :find_college, only: %i[ show update destroy ]
    skip_before_action :authorized, only: [:create]


    def index
       @colleges=College.all
       render json: @colleges
    end

    def show
        binding.pry
        college=find_college
        render json: college
    end

    def destroy
        college=College.find(params[:id])
        college.destroy
        head :no_content
    end

    private
    def find_college
     
        College.find(params[:id])
    end
end
