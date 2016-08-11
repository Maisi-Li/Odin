dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(s, dictionary)
  arr = s.downcase.split(/[\s,.'!:?]/)
  hash = Hash.new

  arr.each do |word|
    sub = get_all_substrings(word)
    sub.each do |i|
      if dictionary.include?(i)
        if hash.has_key?(i)
          hash[i] += 1
        else
          hash[i] = 1
        end
      end
    end
  end

  hash
end

def get_all_substrings(s)
  result = []
  (0..s.length - 1).map do |i|
    (i..s.length - 1).map do |j|
      result << s[i..j]
    end
  end
  result
end

puts substrings("Howdy partner, sit down! How's it going?", dictionary)
