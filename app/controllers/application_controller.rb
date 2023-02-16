class ApplicationController < ActionController::API

  include ActionController::Cookies
  

#   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
#   before_action :authorize
#   private

#   def authorize
    
#     @current_user = User.find_by(id: session[:user_id])
   
#     render json: { errors: ["not authorized"] }, status: :unauthorized unless @current_user
#   end

#   def render_unprocessable_entity_response(exception)
#     render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
#   end
# end

    before_action :authorized
    
    def not_found_method
      render file: Rails.public_path.join('404.html'), status: :not_found, layout: false
    end
   
    def encode_token(payload)
      JWT.encode(payload, "put your secret password here")
    end

 
    def auth_header
      request.headers['Authorization']
    end
    def decoded_token
      
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          JWT.decode(token, "put your secret password here", true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end

    
    def current_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end

   
    def logged_in?
      !!current_user
    end

    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
  end

