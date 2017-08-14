require 'openssl'
require 'google/api_client'


class JobsController < ApplicationController

  def index
  #OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
    @client = Google::APIClient.new(
      key: ENV['GOOGLE_API_KEY'], authorization: nil)
    @search = @client.discovered_api('customsearch')
    @client.execute(api_method: @search.cse.list,
      parameters: {q: 'tech jobs', startIndex: 1,
        key: ENV['GOOGLE_API_KEY'],
        cx: ENV['GOOGLE_SEARCH_CX']})
    raise @client.inspect
    end
  end
