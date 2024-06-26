import PreviewCard from '../../components/PreviewCard/PreviewCard';
import skirtImage from '../../assets/skirt.png';
import './Preview.css'; 
import formIcon from '../../assets/FormIcon.png';


const products = [
  {
    id: 1,
    image: skirtImage,
    name: 'Спідниця бежева коротка',
    price: 29.99,
    quantity: 3
  },
  {
    id: 2,
    image: 'skirtImage',
    name: 'Спідниця бежева коротка',
    price: 19.99,
    quantity: 5
  },
  {
    id: 3,
    image: 'skirtImage',
    name: 'Спідниця бежева коротка',
    price: 39.99,
    quantity: 2
  },
  {
    id: 1,
    image: skirtImage,
    name: 'Спідниця бежева коротка',
    price: 29.99,
    quantity: 3
  },
  {
    id: 2,
    image: 'skirtImage',
    name: 'Спідниця бежева коротка',
    price: 19.99,
    quantity: 5
  },
  {
    id: 3,
    image: 'skirtImage',
    name: 'Спідниця бежева коротка',
    price: 39.99,
    quantity: 2
  }
];

const Preview = () => {
    return (
      <div className="preview">
        <div className="top-section">
          <img src={formIcon} alt="Form Icon" className="form-icon"/> {/* Лого у верхній частині */}
          <h1>Flare</h1>
        </div>
        <div className="products-section">
          {products.map(product => (
            <PreviewCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Preview;