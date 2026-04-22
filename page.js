export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif',background:'#000',color:'#fff',minHeight:'100vh',padding:'40px'}}>
      <h1 style={{fontSize:'48px'}}>AP Villas & Resorts</h1>
      <p>Luxury Private Stays in Ujjain</p>
      <a href="https://wa.me/919999999999?text=Hi%20AP%20Villas%20I%20want%20to%20book" style={{display:'inline-block',marginTop:'20px',padding:'12px 20px',background:'#f5c542',color:'#000',borderRadius:'12px',textDecoration:'none'}}>Book on WhatsApp</a>
      <section style={{marginTop:'40px'}}>
        <h2>Why Stay With Us</h2>
        <ul>
          <li>Private Pool</li><li>Luxury Bedrooms</li><li>Parking</li><li>Family Friendly</li>
        </ul>
      </section>
    </main>
  )
}