const dynamicText = {
  Age:
    "<p><strong>Data Series:</strong> Age</p><p><strong>Description</strong>: Age is based on the self-reported answer of Sauti platform users to the question, &ldquo;Your Age:&rdquo;. Users have 6 options: 10-20; 20-30; 30-40; 40-50; 50-60; 60-70</p><p><strong>Data Availability: </strong>Kenya since 2017-10-01; Uganda since 2017-10-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Border Crossing Frequency":
    "<p><strong>Data Series:</strong> Border Crossing Frequency</p><p><strong>Description</strong>: Border Crossing Frequency is based on the self-reported answer of Sauti platform users to the question, &ldquo;How often do you cross the border each month?&rdquo;. Users have 4 options: Monthly; Weekly; Daily; Never</p><p><strong>Data Availability: </strong>Kenya since 2017-11-01; Uganda since 2017-11-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Border Location":
    "<p><strong>Data Series:</strong> Crossing Location</p><p><strong>Description</strong>: Crossing Location is based on the self-reported answer of Sauti platform users to the question, &ldquo;Which border do you regularly use?&rdquo;. Users have several options based on the official border crossings between their respective countries, and other countries where Sauti is deployed. Users also have the option to choose &ldquo;Other,&rdquo; or &ldquo;I do not regularly cross the border&rdquo; (not presented).</p><p><strong>Data Availability: </strong>Kenya since 2017-10-01; Uganda since 2017-10-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to country and border deployments of Sauti&rsquo;s information platform. Given Sauti&rsquo;s historical deployments, this data is likely biased towards border crossings where Sauti has operated longest. Direct comparisons between borders is not recommended, and therefore should be mainly used as a filter to geographically isolate and/or compare other data series of interest.</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Country of Residence":
    "<p><strong>Data Series:</strong> Country of Residence</p><p><strong>Description</strong>: Country of Residence is based on the area code of the phone number that Sauti platform user use to access our information platform. E.g. if a user accesses Sauti&rsquo;s platform with a +254 phone number, they are recorded in the Kenya sample.</p><p><strong>Data Availability: </strong>Kenya since 2017-09-01; Uganda since 2017-09-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Note that, unlike most other Trade Insights data series, country of residence is not reported from user input, but by the area code of a user dialing the platform.</p><p><strong>Aggregation Method</strong>: Mobile phone area codes</p><p><strong>Topic</strong>: Demographic</p>",
  "Education Level":
    "<p><strong>Data Series:</strong> Education Level</p><p><strong>Description</strong>: Age is based on the self-reported answer of Sauti platform users to the question, &ldquo;Your Education:&rdquo;. Users have 4 options: &ldquo;No formal education&rdquo;; &ldquo;Primary&rdquo;; &ldquo;Secondary&rdquo;; &ldquo;University/College&rdquo;.</p><p><strong>Data Availability: </strong>Kenya since 2017-10-01; Uganda since 2017-10-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  Gender:
    "<p><strong>Data Series:</strong> Gender</p><p><strong>Description</strong>: Gender is based on the self-reported answer of Sauti platform users to the question, &ldquo;Your Gender:&rdquo;. Users have two options: &ldquo;Male&rdquo;; &ldquo;Female&rdquo;.</p><p><strong>Data Availability: </strong>Kenya since 2017-10-01; Uganda since 2017-10-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Preferred Language":
    "<p><strong>Data Series:</strong> Primary Language</p><p><strong>Description</strong>: Primary Language is based on users&rsquo; selection of preferred language when accessing the Sauti platform.</p><p><strong>Data Availability: </strong>Kenya since 2017-09-01; Uganda since 2017-09-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Each country platform has its own availability of local languages, based on the design of the platform and specific language support. As a result, certain languages may not be available for users in certain countries. For example, Kinyarwanda, is not represented available as an option for users in Tanzania. As such, this data series should be filtered by country of residence for more accurate analysis.</p><p>Additionally, as this data series is informed by language selections on Sauti&rsquo;s SMS and USSD platforms, it may not be a direct reflection of language spoken at home. Further, language literacy may also be different than spoken proficiency. In any case, this data series, most directly, is a reflection of users preference for Sauti&rsquo;s information platform &ndash; additional extrapolations must consider additional confounding factors.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Demographic</p>",
  "Cross Border Trade as Primary Income":
    "<p><strong>Data Series:</strong> Cross Border Trade as Primary Income</p><p><strong>Description</strong>: Cross Border Trade as Primary Income is based on the self-reported answer of Sauti platform users to the question, &ldquo;Is cross-border trade your primary source of income?&rdquo;. Users have two options: &ldquo;Yes&rdquo;; &ldquo;No&rdquo;.</p><p><strong>Data Availability: </strong>Kenya since 2018-03-01; Uganda since 2018-03-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Grow/Produce their Own Goods":
    "<p><strong>Data Series:</strong> Grow/Produce their Own Goods</p><p><strong>Description</strong>: Produce their Own Goods is based on the self-reported answer of Sauti platform users to the question, &ldquo;Do you or any of your family members grow/produce the products you sell?&rdquo;. Users have two options: &ldquo;Yes&rdquo;; &ldquo;No&rdquo;.</p><p><strong>Data Availability: </strong>Kenya since 2019-05-01; Uganda since 2019-05-01; Rwanda since 2020-05-01; Tanzania since 2020-08-29</p><p><strong>Aggregation Method</strong>: One-time self-reported user data</p><p><strong>Topic</strong>: Demographic</p>",
  "Requested Agencies":
    "<p><strong>Data Series:</strong> Requested Agencies</p><p><strong>Description</strong>: Requested Agencies is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-07-01</p><p><strong>Limitations and Exceptions</strong>: The options available for users were determined from interviews with small scale traders to identify the most relevant agencies to their business. Additionally, options are also limited by information that was available. As a result, not every potential trade-related agency may be represented. Data options should be considered relative to each other possible option in the data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Information Demand</p>",
  "Requested Documents":
    "<p><strong>Data Series:</strong> Requested Documents</p><p><strong>Description</strong>: Requested Documents is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01</p><p><strong>Limitations and Exceptions</strong>: The options available for users were determined from interviews with small scale traders to identify the most relevant documents to their business. Additionally, options are also limited by information that was available. As a result, not every potential trade-related document may be represented. Data options should be considered relative to each other possible option in the data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Information Demand</p>",
  "Requested Procedures, by Commodity":
    "<p><strong>Data Series:</strong> Requested Procedures, by Commodity</p><p><strong>Description</strong>: Requested Procedures, by Commodity is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01</p><p><strong>Limitations and Exceptions</strong>: The options available for users were determined from interviews with small scale traders to identify the most relevant commodity procedures to their business. Additionally, options are also limited by information that was available. As a result, not every potential commodity procedure may be represented. Data options should be considered relative to each other possible option in the data series.</p><p>Note that &lsquo;Requested Procedures, by Commodity&rsquo; is a disaggegated form of &lsquo;Requested Procedures, by Commodity Category.&rsquo; Filtering this data series on Requested Procedures, by Commodity Category can identify the specific commodities within that category.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Information Demand</p>",
  "Requested Procedures, by Commodity Category":
    "<p><strong>Data Series:</strong> Requested Procedures, by Commodity Category</p><p><strong>Description</strong>: Requested Procedures, by Commodity Category is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01</p><p><strong>Limitations and Exceptions</strong>: The options available for users were determined from interviews with small scale traders to identify the most relevant commodity procedures to their business. Additionally, options are also limited by information that was available. As a result, not every potential commodity procedure may be represented. Data options should be considered relative to each other possible option in the data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Information Demand</p>",
  "Requested Procedures, by Destination":
    "<p><strong>Data Series:</strong> Requested Procedures, by Destination</p><p><strong>Description</strong>: Requested Procedures, by Destination is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01</p><p><strong>Limitations and Exceptions</strong>: The options available for users were determined from interviews with small scale traders to identify the most relevant procedures destinations to their business. Additionally, options are also limited by information that was available. As a result, not every potential commodity procedure may be represented. Data options should be considered relative to each other possible option in the data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Information Demand</p>",
  "Currency Exchanges":
    "<p><strong>Data Series:</strong> Currency Exchanges</p><p><strong>Description</strong>: Currency Exchanges is based on users&rsquo; selection on the Sauti platform when searching for exchange rate calculations.</p><p><strong>Data Availability: </strong>Kenya since 2017-09-01; Uganda since 2017-09-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to country and border deployments of Sauti&rsquo;s information platform. Direct comparisons between countries is not recommended, and therefore should be filtered by country of residence</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>",
  "Traders' Destination Country":
    "<p><strong>Data Series:</strong> Traders' Buying/Selling Country</p><p><strong>Description</strong>: Traders' Destination Country is based on users&rsquo; selection on the Sauti platform when searching for market prices.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to the availability of up-to-date commodity/country market prices. As a result, very marketplaces or commodities with limited accessible price information will be poorly represented in this data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>",
  "Traders' Destination Market":
    "<p><strong>Data Series:</strong> Traders' Buying/Selling Market</p><p><strong>Description</strong>: Traders' Buying/Selling Market is based on users&rsquo; selection on the Sauti platform when searching for market prices.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to the availability of up-to-date commodity/country market prices. As a result, very marketplaces or commodities with limited accessible price information will be poorly represented in this data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>",
  "Traded Commodities' Origin":
    "<p><strong>Data Series:</strong> Traded Commodities' Origin</p><p><strong>Description</strong>: Traded Commodities' Origin is based on users&rsquo; selection on the Sauti platform when searching for border procedure information.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>",
  "Traded Commodities":
    "<p><strong>Data Series:</strong> Traded Commodities</p><p><strong>Description</strong>: Traded Commodities is based on users&rsquo; selection on the Sauti platform when searching for market prices.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to the availability of up-to-date commodity/country market prices. As a result, very marketplaces or products with limited accessible price information will be poorly represented in this data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>",
  "Traded Commodity Categories":
    "<p><strong>Data Series:</strong> Traded Commodity Categories</p><p><strong>Description</strong>: Traded Commodity Categories is based on users&rsquo; selection on the Sauti platform when searching for market prices.</p><p><strong>Data Availability: </strong>Kenya since 2017-06-01; Uganda since 2017-06-01; Rwanda since 2018-09-01; Tanzania since 2020-01-01</p><p><strong>Limitations and Exceptions</strong>: Options available to users update according to the availability of up-to-date commodity/country market prices. As a result, very marketplaces or commodities with limited accessible price information will be poorly represented in this data series.</p><p><strong>Aggregation Method</strong>: Users&rsquo; platform interaction data</p><p><strong>Topic</strong>: Cross-border Trade Economics</p>"
};

export default dynamicText;
