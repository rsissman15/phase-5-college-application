class ApplicationController < ActionController::API

  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authenticate




  private

  def authenticate
    render json: {error: "Not authorized"}, status: :unauthorized unless current_user 
  end

  def record_invalid(invalid)
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity 
  end

  def record_not_found(error)
    render json: {error: error.message}, status: :unprocessable_entity
  end

  def login_user
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  def current_user
    User.find_by_id(session[:user_id])
  end





    # before_action :authorized
    
    # def not_found_method
    #   render file: Rails.public_path.join('404.html'), status: :not_found, layout: false
    # end
   
    # def encode_token(payload)
    #   JWT.encode(payload, "put your secret password here")
    # end

 
    # def auth_header
    #   request.headers['Authorization']
    # end
    # def decoded_token
      
    #   if auth_header
    #     token = auth_header.split(' ')[1]
    #     begin
    #       JWT.decode(token, "put your secret password here", true, algorithm: 'HS256')
    #     rescue JWT::DecodeError
    #       nil
    #     end
    #   end
    # end

    
    # def current_user
    #   if decoded_token
    #     user_id = decoded_token[0]['user_id']
    #     @user = User.find_by(id: user_id)
    #   end
    # end

   
    # def logged_in?
    #   !!current_user
    # end

    # def authorized
    #   render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    # end
  end

