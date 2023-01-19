class ApplicationsController < ApplicationController
    before_action :find_college
  
     # GET /reservations
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
  
    # POST /applications
  
    def create
      @application = current_user.applications.build(application_params.merge({college_id:@college.id}))
      if @application.save
        render json: @application, status: 200
      else
        render json: {errors: @application.errors.full_messages}, status: :unprocessable_entity
      end
    end
  
    def destroy
      application=find_application
      if application.user==current_user
        application.destroy
        head :no_content
      else
        render json: {errors:'You are not authorized'}, status: :unauthorized
      end
    end
  
    def update
  
      application=find_application
      if application.user==current_user
        if application.update(application_params)
          render json: application
        else
          render json:{errors: application.errors.full_messages}, status: :unprocessable_entity
        end
      else
        render json: {errors:'You are not authorized'}, status: :unauthorized
      end
     
      
    end
  
    private
      def find_activity
        @college=College.find_by_id(params[:college_id])
      end
  
      def find_application
        application.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def application_params
        params.permit(:date)
      end
  end