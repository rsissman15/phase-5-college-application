class CollegesController < ApplicationController
    #skip_before_action :authorized, only:[:index,:destroy]
    require 'rest-client'
    def get_colleges
        url="http://universities.hipolabs.com/search?name="
        response= RestClient.get(url)
        render json: response
    end

    def index
       @colleges=College.all
       render json: @colleges
    end

    def index
        @colleges=College.all
        render json: @colleges
    end

    def destroy
        college=College.find(params[:id])
        college.destroy
        head :no_content
    end

    # def index

    #     @colleges=College.all
    #     render json: @colleges
    # end

    private
    # def find_college
    #     College.find(params[:id])
    # end
end
