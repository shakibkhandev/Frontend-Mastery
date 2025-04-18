import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import "./App.css";

const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

const COUNTRY_OPTIONS = [
  { code: "BR", name: "Brazil" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "IT", name: "Italy" },
  { code: "CA", name: "Canada" },
  { code: "JP", name: "Japan" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState("BR");
  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: selectedCountry },
  });

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  if (loading) return <div className="loading">Fetching country data...</div>;
  if (error) return <div className="error">Oops! {error.message}</div>;

  const { country } = data;

  return (
    <div className="container">
      <div className="country-selector">
        <label htmlFor="country-select">Explore Countries</label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          aria-label="Select a country"
        >
          {COUNTRY_OPTIONS.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div className="country-card">
        <div className="country-header">
          <span
            className="emoji"
            role="img"
            aria-label={`${country.name} flag`}
          >
            {country.emoji}
          </span>
          <h1>{country.name}</h1>
        </div>

        <div className="country-info">
          <div className="info-item">
            <label>Native Name</label>
            <span>{country.native}</span>
          </div>

          <div className="info-item">
            <label>Capital</label>
            <span>{country.capital}</span>
          </div>

          <div className="info-item">
            <label>Currency</label>
            <span>{country.currency}</span>
          </div>

          <div className="info-item">
            <label>Languages</label>
            <div className="languages">
              {country.languages.map((lang) => (
                <span key={lang.code} className="language-tag">
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
