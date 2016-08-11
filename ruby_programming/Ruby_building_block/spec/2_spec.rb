require_relative '../2'

require 'yaml'

describe 'stock_picker' do
  it "return nil while array size <2" do
    expect(stock_picker([])).to eq(nil)
  end

  it "return nil while the array is descending order [3,2,1]" do
    expect(stock_picker([3,2,1])).to eq(nil)
  end

  it "find the best day to buy and sell" do
    expect(stock_picker([17,3,6,9,15,8,6,1,10])).to eq([1,4])
  end

end
