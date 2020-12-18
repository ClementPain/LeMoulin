class Api::V1::CommentOnItemsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :find_item
  before_action :find_comment_on_item, only: %w[update destroy]

  def index
    @comments_on_item = CommentOnItem.select{ |comment| comment.item === @item }
    render json: @comments_on_item, include: [:profile]
  end

  def create
    @comment_on_item =  CommentOnItem.new(item_params)
    @comment_on_item.user = current_user if current_user
    @comment_on_item.item = @item if @item

    if @comment_on_item.save
      render json: @comment_on_item, status: :created
    else
      render json: { errors: @comment_on_item.errors }, status: :unprocessable_entity
    end
  end

  def update
    @comment_on_item.edit(:item_params)

    if @comment_on_item.save
      render json: @comment_on_item, status: :created
    else
      render json: { errors: @comment_on_item.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @comment_on_item.delete
  end

  private
    def find_item
      @item = Item.find(params[:item_id])
    end

    def find_comment_on_item
      @comment_on_item = CommentOnItem.find(params[:id])
    end

    def item_params
      params.require(:comment_on_item).permit(:content)
    end
end
