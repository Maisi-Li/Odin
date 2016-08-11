require_relative '../1'

require 'yaml'

describe "caesar_cipher" do
  it "Have return value" do
    expect(caesar_cipher("",1)).not_to eq(nil)
  end

  it "do not change characters that are not alphabet" do
    expect(caesar_cipher("!@#123",1)).to eq("!@#123")
  end

  it "shift lowercase characters" do
    expect(caesar_cipher("abcz",1)).to eq("bcda")
  end

  it "shift uppercase characters" do
    expect(caesar_cipher("ABCZ",1)).to eq("BCDA")
  end

  it "Pass Mix test" do
    expect(caesar_cipher("What a string!",5)).to eq("Bmfy f xywnsl!")
  end

end
