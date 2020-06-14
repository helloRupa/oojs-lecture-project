class Superstar
  # required for public access to instance variables from outside
  # the class
  attr_accessor :name, :talent

  # class variable
  @@all = []

  # maps to JS's constructor()
  def initialize(name, talent)
    @name = name
    @talent = talent
  end

  # instance method
  def introduce
    puts "My name is #{@name} and I can #{@talent}."
  end

  # class method
  def self.about
    puts "I track the most talented people ever!"
  end

end

# child class, inheritance
class Bjork < Superstar 
  def initialize
    super('Bjork', 'Music')
  end
end

# call class method
Superstar.about

# create instances and call instance methods
star = Superstar.new('Beth Gibbons', 'Singing')
star.introduce

bjork = Bjork.new
bjork.introduce


# It's OK if you don't get to the below before lecture

# Save this for last, I just want you to notice that there is a 
# difference between self in Ruby and this in JS
def introduce_yourself_again
  # this method is calling a block that was provided as
  # an argument. Remind you of something?
  yield
end

introduce_yourself_again { star.introduce }