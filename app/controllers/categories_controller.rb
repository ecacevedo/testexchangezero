class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # def add_item_category
  #   @item = Item.find(params[:item_id])
  #   @category = Category.find(params[:id])

  #   @category.items << @item

  #   render json: @item, include: :categories
  # end


  # GET /categories
  def index
    @categories = Category.all

    render json: @categories, include: :items
  end

  # GET /categories/1
  def show
    render json: @category, include: :items
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # # DELETE /categories/1
  # def destroy
  #   @category.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def category_params
      params.require(:category).permit(:category_name)
    end
end
