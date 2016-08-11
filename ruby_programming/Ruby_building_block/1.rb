def  caesar_cipher(s, shift)
  lower = ('a'..'z').to_a.join
  upper = ('A'..'Z').to_a.join

  shift = shift%lower.size
  new_s = ""
  s.each_char do |c|
    if !lower.include?(c) && !upper.include?(c)
      new_s << c
    elsif lower.include?(c)
      new_s << lower[lower.index(c) + shift - lower.size]
    elsif upper.include?(c)
      new_s << upper[upper.index(c) + shift - upper.size]
    end
  end

  new_s
end

# puts caesar_cipher("fasdf2345", 1)
