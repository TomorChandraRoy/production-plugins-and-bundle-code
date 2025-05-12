
export const PriceCardOne = ({ attributes, setAttributes, }) => {
  const { priceCardData } = attributes;


  return (
    <div className='bBlocksPriceCardContent'>
     

  <div className="container">
    {/* <!-- Header --> */}
    <div className="header">
      <button className="pricing-button">Pricing</button>
    </div>
    
    {/* <!-- Main Content --> */}
    <div className="main-content">
      <h1>Discover Clear &<br/>Competitive Pricing</h1>
      
      <div className="pricing-toggle">
        <button className="toggle-button active">Monthly</button>
        <button className="toggle-button">Yearly <span className="discount">20% Off</span></button>
      </div>
    </div>
    
    {/* <!-- Pricing Cards --> */}
    <div className="pricing-cards">
      {/* <!-- Free Card --> */}
      <div className="pricing-card">
        <h3>Free</h3>
        <div className="price">$0<span>/mo</span></div>
        <button className="card-button secondary">Get Started for Free</button>
        <p className="description">For teams working on growing and scaling their community</p>
        <p className="feature-title">Everything is Basic</p>
        <ul className="features">
          <li><span className="check">✓</span> 25 Free Messages</li>
          <li><span className="check">✓</span> 1 Chatbot</li>
          <li><span className="check">✓</span> Basic Models</li>
          <li><span className="check">✓</span> 100 Captured Contacts</li>
          <li><span className="check">✓</span> Basic Support</li>
        </ul>
      </div>
      
      {/* <!-- Standard Card --> */}
      <div className="pricing-card">
        <h3>Standard</h3>
        <div className="price">$10<span>/mo</span></div>
        <button className="card-button secondary">Get Started for Free</button>
        <p className="description">For teams working on growing and scaling their community</p>
        <p className="feature-title">Everything is Basic</p>
        <ul className="features">
          <li><span className="check">✓</span> 25 Free Messages</li>
          <li><span className="check">✓</span> 1 Chatbot</li>
          <li><span className="check">✓</span> Basic Models</li>
          <li><span className="check">✓</span> 100 Captured Contacts</li>
          <li><span className="check">✓</span> Basic Support</li>
        </ul>
      </div>
      
      {/* <!-- Popular Card --> */}
      <div className="pricing-card">
        <h3>Popular</h3>
        <div className="price">$25<span>/mo</span></div>
        <button className="card-button primary">Get Started for Free</button>
        <p className="description">For teams working on growing and scaling their community</p>
        <p className="feature-title">Everything is Basic</p>
        <ul className="features">
          <li><span className="check">✓</span> 25 Free Messages</li>
          <li><span className="check">✓</span> 1 Chatbot</li>
          <li><span className="check">✓</span> Basic Models</li>
          <li><span className="check">✓</span> 100 Captured Contacts</li>
          <li><span className="check">✓</span> Basic Support</li>
        </ul>
      </div>
      
      {/* <!-- Enterprise Card --> */}
      <div className="pricing-card">
        <h3>Enterprise</h3>
        <div className="price">$50<span>/mo</span></div>
        <button className="card-button secondary">Get Started for Free</button>
        <p className="description">For teams working on growing and scaling their community</p>
        <p className="feature-title">Everything is Basic</p>
        <ul className="features">
          <li><span className="check">✓</span> 25 Free Messages</li>
          <li><span className="check">✓</span> 1 Chatbot</li>
          <li><span className="check">✓</span> Basic Models</li>
          <li><span className="check">✓</span> 100 Captured Contacts</li>
          <li><span className="check">✓</span> Basic Support</li>
        </ul>
      </div>
    </div>
  </div>

    </div>
  )
}
