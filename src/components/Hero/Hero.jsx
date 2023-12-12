import "./Hero.css"
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-slogan">
        <span>Find your favorites this season💖</span>
        <h2>The best collections for everyone</h2>
        <a href="/">discover now</a>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.png" alt="" className="hero-image" />
      </div>
    </section>
  )
}

export default Hero
