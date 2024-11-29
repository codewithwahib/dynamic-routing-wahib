import Link from 'next/link';

interface CountryNameProps {
  params: {
    country_name: string;
  };
}

export default function CountryName({ params }: CountryNameProps) {
  const countries = [
    { name: "Pakistan", population: 253256000, capital: "Islamabad" },
    { name: "India", population: 1426000000, capital: "Delhi" },
    { name: "Nepal", population: 30030000, capital: "Kathmandu" },
    { name: "China", population: 1426000000, capital: "Beijing" },
  ];

  function findCountry(country_url: string) {
    return countries.find(
      (country) => country.name.toLowerCase() === country_url.toLowerCase()
    );
  }

  const result = findCountry(params.country_name);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div>
        {result ? (
          <>
            <h1>Country Name: {result.name}</h1>
            <h1>Country Population: {result.population}</h1>
            <h1>Country Capital: {result.capital}</h1>
          </>
        ) : (
          <h1>Country Not Found.</h1>
        )}
      </div>
      <div>
        <li className="cust_button">
          <Link
            href="/"
            style={{
              color: "white",
              backgroundColor: "#900C3F",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Back To Country List
          </Link>
        </li>
      </div>
    </div>
  );
}



