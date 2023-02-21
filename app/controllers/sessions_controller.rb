class SessionsController <  ApplicationController
  skip_before_action :authenticate, only: [:create]

  def create
    @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
      login_user
      render json: @user, status: :ok
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
   
  end

  # logout - destroy the session
  def destroy
    reset_session
    render json: { errors: ["Successfully logged out"]}, status: :ok
  end










    # skip_before_action :authorized, only: [:create]

    # def get_current_user
    #     render json: current_user
    # end

    # def create
    #     @user=User.find_by(username: params[:username])
    #     if @user && @user.authenticate(params[:password])
    #         @token=encode_token({user_id:@user.id})
    #         render json: {user:@user, token: @token}, status: :ok 
    #     else
    #         render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    #     end
    # end
    
end