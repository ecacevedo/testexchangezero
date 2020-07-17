class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.all

    render json: @items
  end

  # GET /items/1
  def show
    render json: @item, include: :categories
  end

  # this line is money -> include: :categories

  # POST /items
  def create
    @item = Item.new(item_params)
    @item.user = @current_user
    # @user = User.find(params[:user_id])
    # @item.user = @user

    # @category = Category.find(params[:category_id])
    # @item.categories << @category

    if @item.save
      render json: @item, status: :created
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def item_params
      params.require(:item).permit(:item_name, :locationdetails, :image_url, :user_id)
    end
end
