import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import Modal from 'react-modal';


const ACCESS_KEY = 'G-JscQYw8ThDWt0FfyZZaAgvNJSfPCBWsUN48LLB0Nk';

Modal.setAppElement('#root');

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const App = () => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [modalImage, setModalImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    useEffect(() => {
      if (!query) return;
  
      const fetchImages = async () => {
        setIsLoading(true);
        setError(null);
  
        try {
          const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query, page, per_page: 12 },
            headers: {
              Authorization: `Client-ID ${ACCESS_KEY}`,
            },
          });
          setImages(prevImages => [...prevImages, ...response.data.results]);
        } catch (error) {
          setError('Failed to load images.');
          toast.error('Failed to load images.');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchImages();
    }, [query, page]);
  
    const handleSearch = (searchQuery) => {
      if (!searchQuery.trim()) {
        toast.error('Please enter a search query.');
        return;
      }
  
      setQuery(searchQuery);
      setImages([]);
      setPage(1);
    };
  
    const loadMore = () => {
      setPage(prevPage => prevPage + 1);
    };
  
    const openModal = (image) => {
      setModalImage(image);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalImage(null);
      setModalIsOpen(false);
    };
  
    return (
      <div>
        <SearchBar onSubmit={handleSearch} />
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
          shouldCloseOnOverlayClick={true}
        >
          {modalImage && (
            <div>
              <img src={modalImage.urls.regular} alt={modalImage.alt_description} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
            </div>
          )}
        </Modal>
      </div>
    );
  };
  
  export default App;