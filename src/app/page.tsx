import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-of-country-list">
      <div className="heading">
        <h1>Country List</h1>
      </div>
      
      <Link href="/country/pakistan" style={{
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        color: "black",
        fontSize: "25px",
        textDecoration: "none",
        justifyContent: "center"
      }}><strong>Pakistan</strong></Link>
      
      <br />
      <br />
      
      <Link href="/country/india" style={{
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        color: "black",
        fontSize: "25px",
        textDecoration: "none",
        justifyContent: "center"
      }}><strong>India</strong></Link>
      
      
      <br />
      <br />
      
      <Link href="/country/nepal" style={{
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        color: "black",
        fontSize: "25px",
        textDecoration: "none",
        justifyContent: "center"
      }}><strong>Nepal</strong></Link>
      
      <br />
      <br />
      
      
      <Link href="/country/canada" style={{
        margin: "10px",
        borderRadius: "10px",
        border: "2px solid black",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        color: "black",
        fontSize: "25px",
        textDecoration: "none",
        justifyContent: "center"
      }}><strong>Canada</strong></Link>
      
      {/* New Heading below the links with background color */}
      <div style={{
        textAlign: "center", 
        fontWeight: "bold", 
        color: "black", 
        marginTop: "20px",
        backgroundColor: "#900C3F", // Background color of the heading
        padding: "10px"
      }}>
        <h1>Assignment By: Muhammad Wahib Jaffer</h1>
      </div>
    </div>
  );
}