class UsersController < ApplicationController

  skip_before_action :authenticate, only: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      # logs in user
      login_user # creates new session
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
 
  end

  def get_current_user
    if logged_in?
      render json: current_user, status: :ok
    else
      render json: { errors: ["There is currently no user logged in."] }, status: :bad_request
    end

  end

  private 

  def user_params
      params.permit(:username, :email, :password) # password=
  end



 
    # skip_before_action :authorized, only:[:create]
    # before_action :set_user, only: %i[ show update destroy ]


    # def index 
    #     @users=User.all
    #     render json: @users, include: [{applications:{include: [:college]}}]

    # end

    # def show
    #     render json: current_user
    # end

    # def create
    #     @user=User.create!(user_params)
    #     @token=encode_token({user_id:@user.id})
    #     render json: {user:@user, token: @token}, status: :created

    # rescue ActiveRecord::RecordInvalid => e
    #     render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
        
    # end

    # private
    # def set_user
    #     @user=User.find(params[:id])
    # end


    
    # def user_params
    #   params.permit(:username, :password, :email)
    # end

 
end
