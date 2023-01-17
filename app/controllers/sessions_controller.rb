class SessionsController < ApplicationController

    def get_current_user
        render json: current_user
    end


    def create
        if @user && @user.authenticate(params[:password])
            @token=encode_token({user_id:@user.id})
            render json: {user:@user, token: @token}, status: :ok 
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    
    end
    private
    def find_user
        @user=User.find_by(username: params[:username])
    end
    def user_login_params
        params.permit(:username,:password)
    end

end