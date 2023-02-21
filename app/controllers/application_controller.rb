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





  end

