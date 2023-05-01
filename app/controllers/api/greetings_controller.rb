class Api::GreetingsController < ApplicationController
  def random
    random_greeting = Greeting.order('RANDOM()').first
    render json: JSON.pretty_generate({ message: random_greeting.message }), status: :ok
  end
end
