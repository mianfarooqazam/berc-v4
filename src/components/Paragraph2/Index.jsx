import Img1 from '../../assets/images/gallery/img1.jpeg';
import Img2 from '../../assets/images/gallery/img2.jpeg';
import Img3 from '../../assets/images/gallery/img3.jpeg';
import Img5 from '../../assets/images/gallery/img5.jpeg';
import Img6 from '../../assets/images/gallery/img6.jpeg';
import Img7 from '../../assets/images/gallery/img7.jpeg';
import Img8 from '../../assets/images/gallery/img8.jpeg';
import Img9 from '../../assets/images/gallery/img9.jpeg';
import Img11 from '../../assets/images/gallery/img11.jpeg';
import Img12 from '../../assets/images/gallery/img12.jpeg';
import Img13 from '../../assets/images/gallery/img13.jpeg';
import Img14 from '../../assets/images/gallery/img14.jpeg';

const images = [
  Img14, Img13, Img12, Img11, Img1, Img2, Img3, Img5, Img6, Img7, Img8, Img9
];

const Gallery = () => {
  return (
    <section 
      id="gallery" 
      className="relative flex flex-col items-center justify-center p-10"
      style={{ backgroundColor: "#fff", minHeight: 'auto' }}
    >
      <h1 className="relative text-4xl font-semibold text-black mb-8">See Us Through Lens</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
