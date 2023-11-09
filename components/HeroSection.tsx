const HeroSection = () => {
  return (
    <section id="hero" className="duration-500 w-full">
      <div
        className="flex max-w-screen h-screen"
        style={{
          background:
            "url('https://static.wixstatic.com/media/ad9f2a_d4e96b5b82034a8fbd6304291f33db10~mv2.jpg/v1/fill/w_1189,h_960,fp_0.50_0.50,q_85,enc_auto/ad9f2a_d4e96b5b82034a8fbd6304291f33db10~mv2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
