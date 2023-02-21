class CollegesController < ApplicationController
    #skip_before_action :authenticate, only: [:index,:show]
    
    def index
       @colleges=College.all
       render json: @colleges, include: [{applications:{include: [:user],except: [:user_id, :college_id]}}]
    end

    def show
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
