def stock_picker(arr)
  if(arr.size < 2)
    return nil
  end
  result = []
  min = arr[0]

  min_index = 0
  max_diff = 0
  arr.each_with_index do |val, index|
    if val - min > max_diff
      result[0] = min_index
      result[1] = index
      max_diff = val - min
    end

    if min > val
      min_index = index
      min = val
    end

  end

  if result.empty?
    return nil
  else
    return result
  end

end

# stock_picker([17,3,6,9,15,8,6,1,10])
