class ApplicationsController < ApplicationController
    before_action :find_college

    def index
        if params[:user_id]
          user = User.find(params[:user_id])
          applications = user.applications
        else
          applications = Applications.all
        end
        render json: applications, include: [:user, :college]
    end

    def show 
        application=find_application
        render json: application
    end


    def create
        @application = current_user.applications.build(application_params.merge({college_id:@college.id}))

        if @application.save
          render json: @application, status: 200
        else
          render json: {errors: @application .errors.full_messages}, status: :unprocessable_entity
        end
    end
    

    private
    def find_application
        Application.find(params[:id])
    end

    def find_college
        @college=College.find_by_id(params[:college_id])
    end

    def application_params
        params.permit(:name,:location,:major,:application_deadline)
    end
end
