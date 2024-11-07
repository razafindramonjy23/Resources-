import React from 'react'

function Pages() {

    const imageSources = [
        { name: 'Pixabay', url: 'https://pixabay.com/', color: 'bg-teal-700' },
        { name: 'Pexels', url: 'https://www.pexels.com/', color: 'bg-teal-700' },
        { name: 'Unsplash', url: 'https://unsplash.com/', color: 'bg-teal-700' },
        { name: 'Freepik', url: 'https://www.freepik.com/', color: 'bg-teal-700' },
        { name: 'Stockvault', url: 'https://www.stockvault.net/', color: 'bg-teal-700' },
        { name: 'Isorepublic', url: 'https://isorepublic.com/', color: 'bg-teal-700' },
        { name: 'Foter', url: 'https://foter.com/', color: 'bg-teal-700' },
        { name: 'Jeshoots', url: 'https://jeshoots.com/', color: 'bg-teal-700' },
        { name: 'Shutterstock', url: 'https://www.shutterstock.com/', color: 'bg-pink-500' }
      ];
    
      const illustrationAndIcon = [
        { name: 'Loading.io', url: 'https://loading.io/', color: 'bg-teal-700' },
        { name: 'Undraw.co', url: 'https://undraw.co/illustrations', color: 'bg-teal-700' },
        { name: 'Icons8', url: 'https://icones8.fr/', color: 'bg-teal-700' },
        { name: 'Lottiefiles', url: 'https://lottiefiles.com/', color: 'bg-teal-700' },
      ];
    
      const typography = [
        { name: 'Google fonts', url: 'https://fonts.google.com/', color: 'bg-teal-700' },
        { name: 'Dafont', url: 'https://www.dafont.com/', color: 'bg-teal-700' },
        { name: '1001freefonts', url: 'https://www.1001freefonts.com/', color: 'bg-teal-700' },
        { name: 'Emoji', url: 'https://emojipedia.org/fr', color: 'bg-teal-700' },
      ];
    
      const colors = [
        { name: 'Paleton', url: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF', color: 'bg-teal-700' },
        { name: 'Coolors.co', url: 'https://color.adobe.com/fr/', color: 'bg-teal-700' },
        { name: 'Adobe color', url: 'https://color.adobe.com/fr/', color: 'bg-teal-700' },
        { name: 'Color space', url: 'https://mycolor.space/', color: 'bg-teal-700' },
      ];
    
      const design = [
        { name: 'Canva', url: 'https://www.canva.com/', color: 'bg-teal-700' },
        { name: 'Figma', url: 'https://www.figma.com/fr-fr/', color: 'bg-teal-700' },
        { name: 'Photopea', url: 'https://www.photopea.com/', color: 'bg-teal-700' },
        { name: 'Placeit', url: 'https://placeit.net/', color: 'bg-teal-700' },
        { name: 'Postmywall', url: 'https://fr.postermywall.com/', color: 'bg-teal-700' },
      ];
    
      const inspiration = [
        { name: 'Dribble', url: 'https://dribbble.com/', color: 'bg-teal-700' },
        { name: 'Behance', url: 'https://www.behance.net/', color: 'bg-teal-700' },
        { name: 'Design inspiration', url: 'https://www.designspiration.com/', color: 'bg-teal-700' },
        { name: 'Webdesign inspiration', url: 'https://www.webdesign-inspiration.com/', color: 'bg-teal-700' },
        { name: 'Site inspire', url: 'https://www.siteinspire.com/', color: 'bg-teal-700' },
      ];
    
      const cssTools = [
        { name: 'Shadows', url: 'https://getcssscan.com/css-box-shadow-examples', color: 'bg-teal-700' },
        { name: 'CSS Gradient', url: 'https://cssgradient.io/', color: 'bg-teal-700' },
      ];
    
      const aiTools = [
        { name: 'Perplexity', url: 'https://www.perplexity.ai/', color: 'bg-teal-700' },
        { name: 'Dreamina', url: 'https://dreamina.capcut.com/', color: 'bg-teal-700' },
        { name: 'Websim', url: 'https://websim.ai/', color: 'bg-teal-700' },
      ];
    
      const tools = [
        { name: 'Gif editor', url: 'https://ezgif.com/', color: 'bg-teal-700' },
        { name: 'CSS Inliner', url: 'https://www.campaignmonitor.com/resources/tools/css-inliner/', color: 'bg-teal-700' },
        { name: 'W3C HTML Validator', url: 'https://validator.w3.org/#validate_by_input', color: 'bg-teal-700' },
        { name: 'HTML entity list', url: 'https://www.freeformatter.com/html-entities.html', color: 'bg-teal-700' },
        { name: 'Ktk Gifmaker', url: '#', color: 'bg-teal-700' },
        { name: 'KTK Converter & Zipcode', url: '#', color: 'bg-teal-700' },
        { name: 'Ktk image optimizer', url: '#', color: 'bg-teal-700' },
      ];
    
      const renderLinks = (title, items) => (
        <div className=''>
          <h1 className="mb-4 text-2xl font-bold">{title}</h1>
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} text-white font-semibold py-2 px-4 rounded hover:scale-105 transform transition duration-200 flex items-center gap-2`}
              >
                <span role="img" aria-label="smile">😂</span> {item.name}
              </a>
            ))}
          </div>
        </div>
      );
  return (
    <div className="p-6 shadow-md">
      {renderLinks("Images", imageSources)}
      {renderLinks("Illustrations and Icons", illustrationAndIcon)}
      {renderLinks("Typography", typography)}
      {renderLinks("Colors", colors)}
      {renderLinks("Design", design)}
      {renderLinks("Inspiration", inspiration)}
      {renderLinks("CSS Tools", cssTools)}
      {renderLinks("AI Tools", aiTools)}
      {renderLinks("Tools", tools)}
    </div>
  )
}

export default Pages
