class SessionsController <  ApplicationController

#     skip_before_action :authorize, only: :create

#     def create
#       user = User.find_by(username: params[:username])
#       if user&.authenticate(params[:password])
#          session[:user_id] = user.id
#          render json: user
#       else
#         render json: {errors: "Invalid username or password"}, status: :unauthorized
#        end
#        binding.pry
#    end
  
#    def destroy
#      session.delete :user_id
#      head :no_content
#    end
  
#   end

   

    skip_before_action :authorized, only: [:create]

    def get_current_user
        render json: current_user
    end

    def create
        @user=User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token=encode_token({user_id:@user.id})
            render json: {user:@user, token: @token}, status: :ok 
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end
    
end