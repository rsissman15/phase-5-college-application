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

  def destroy
    session.delete :user_id
    head :no_content
   
  end


   
    
end