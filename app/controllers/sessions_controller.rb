class SessionsController <  ApplicationController
    skip_before_action :authorized, only: [:create]

    def get_current_user
        render json: current_user

    
        #retrieve a token adn decode that token in order to get the current user
    end

    def create
        @user=User.find_by(username: params[:username])
        #@user = User.find_by(username: user_login_params[:username])
        if @user && @user.authenticate(params[:password])
        #if @user && @user.authenticate(user_login_params[:password])
            @token=encode_token({user_id:@user.id})
            render json: {user:@user, token: @token}, status: :ok 
        else
            # render json: @user.errors, status: :unprocessable_entity
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    
    end




    def user_login_params
        params.require(:user).permit(:username, :password)
    end
end