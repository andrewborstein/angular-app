

/*
def translate(string)
  vowels = ["a","e","i","o","u"]               # array of vowels
  words = string.split                         # split up all words in the string into array
  pig_words = []                               # create empty array for pig_words
  words.each do |w|                            # for each word in the orig string do...
    length = w.length                            # calculate length of word
    if vowels.include? w[0]                      # word begins with a vowel
      pig_words << w + "ay"                      # add word + "ay" to pig_words array
    elsif w[0..1] == "qu"                        # word begins with "qu"
      consonants = w[0..1]                         # consonants = first two letters of word
      the_rest = w[2..length]                      # the rest = third letter to last letter
      combined = the_rest + consonants + "ay"      # combined = finalized word
      pig_words << combined                     # add combined word to pig_words array
    elsif w[0..2] == "squ"                      # word begins with "squ"
      consonants = w[0..2]                        # same stuff but with first three letters
      the_rest = w[3..length]                     # same
      combined = the_rest + consonants + "ay"     # same
      pig_words << combined                     # same
    else                                        # word begins anything else
      total = 0                                   # used to tally number of consonants
      until vowels.include? w[total]              # until we reach a non-vowel (i.e. consonant)...
        total += 1                                # increment the total
      end                                         # stop when a vowel is reached
      consonants = w[0..total-1]                  # separte consonants using calculated total
      the_rest = w[total..length]                 # separate the other letters using difference between length and same total
      combined = the_rest + consonants + "ay"     # combined = finalized word
      pig_words << combined                       # add combined word to pig_words array
    end 
  end
  pig_string = pig_words.join(' ')             # create final output by joining array elements with blank space
  puts "#{string} = #{pig_string}"             # put it to the console, to see it in action
  pig_string                                   # return final value for rspec testing
end

translate("testing")                          # testing = estingtay
translate("one two")                          # one two = otway
*/