import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function SinglePhotos(props) {

  const getItems = () => {
    return props.photos.map((item) => {
      return <a href={item.url}>
        <img alt="img1" src={item.url} />
      </a>
    });
  }

  return (
    <div className="App">
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {console.log(getItems())}
      </LightGallery>
    </div>
  );
}

export default SinglePhotos;
