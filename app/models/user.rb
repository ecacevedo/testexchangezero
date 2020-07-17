class User < ApplicationRecord
  has_many :items, dependent: :destroy

  has_secure_password

  validates :username, presence: true, uniqueness: true
  
  validates :password, length: { minimum: 6 }

end
