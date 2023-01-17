class UsersController < ApplicationController
    skip_before_action :authorized, only:[:create]
    before_action :set_user, only: %i[ show update destroy ]


    def index 
        @users=User.all
        render json: @users, include: [{applications:{include: [:college]}}]

    end

    def show
        render json: @user
    end
  # POST /users
    def create
        #@user=User.new(user_params)
        @user=User.create!(user_params)
        @token=encode_token({user_id:@user.id})
        render json: {user:@user, token: @token}, status: :created

    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
        
    end
  
    private
    def set_user
        @user=User.find(params[:id])
    end
    def user_params
        params.permit(:email, :password, :username)
    end
end
