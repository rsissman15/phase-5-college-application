class CollegesController < ApplicationController
    
    require 'rest-client'
    def get_colleges
        url="http://universities.hipolabs.com/search?name="
        response= RestClient.get(url)
        render json: response
    end
end
