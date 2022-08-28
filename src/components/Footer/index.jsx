import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div class="container"> 
      <div class="image">
      <a
        href="https://www.instagram.com/achyuth_reddy_36/"
        target="_blank"
      >
        <img
          src="https://res.cloudinary.com/des7uyibo/image/upload/v1605170234/1200px-Instagram_logo_2016.svg_k60zqt.png"
          alt="Instagram-icon"
        />
      </a>
      </div>
     <div class ="image"><a href="https://api.whatsapp.com/send/?phone=919912167559&text&app_absent=0" target="_blank">
        <img
          src="https://res.cloudinary.com/des7uyibo/image/upload/v1605169791/download_1_cshf1b.jpg"
          alt="WhatsApp-icon"
        />
      </a></div>
      <div class="image"><a
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJZfSNlpRmFDRSgZjgJDFJhmBfvdXxNlJKZsQGZWLrMHpxpWFgqLFsPLrznqhTvsbBtQSgV"
        target="_blank"
      >
        <img
          src="data:image/png;base64,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"
          alt="Gmail-icon"
        />
      </a></div>
      
      <div class="image">   <a 
        href="https://www.linkedin.com/in/achyuth-reddy-b85256170/" target="_blank">
        <img
          src="data:image/png;base64,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"
          alt="Linkedin-icon"
        />
      </a></div></div>
     
   
    </footer>
  );
};

export default Footer;
