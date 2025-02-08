document.addEventListener("DOMContentLoaded", function() {
    fetch('content.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('phone').textContent = data.header.phone;
            document.getElementById('email').textContent = data.header.email;
            document.getElementById('twitter').href = data.header.social.twitter;
            document.getElementById('facebook').href = data.header.social.facebook;
            document.getElementById('youtube').href = data.header.social.youtube;
            document.getElementById('instagram').href = data.header.social.instagram;
            document.getElementById('linkedin').href = data.header.social.linkedin;

            document.getElementById('hero-title1').innerHTML = data.hero.title1;
            document.getElementById('hero-title2').innerHTML = data.hero.title2;
            document.getElementById('hero-description').textContent = data.hero.description;
            document.getElementById('hero-button').textContent = data.hero.buttonText;

            document.getElementById('about-title').textContent = data.about.title;
            document.getElementById('about-paragraph1').textContent = data.about.paragraph1;
            document.getElementById('about-paragraph2').textContent = data.about.paragraph2;
            document.getElementById('about-button').textContent = data.about.buttonText;
        });
});