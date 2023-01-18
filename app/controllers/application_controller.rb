class ApplicationController < ActionController::API
    before_action :authorized
   
    def encode_token(payload)
      JWT.encode(payload, "put your secret password here")
    end
    
    # Helper function to check a request if there is an Authorization header
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

    # Used to find the current user if their token passes it's authentication
    def current_user
      if decoded_token
        # Using the decoded token, grab the user_id stored within it and find a user
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end

    # Check if a user is logged in through a series of chained methods
    def logged_in?
      !!current_user
    end

    # If a user is NOT logged in, it sends the message "Please log in"
    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
  end