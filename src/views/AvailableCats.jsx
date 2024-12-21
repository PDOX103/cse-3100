import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(availableCats.map(() => fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())));
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
        setSearchResults(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const handleSearch = () => {
    const filteredCats = cats.filter((cat) => (breedFilter === '' || cat.breed === breedFilter) && (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase())));
    setSearchResults(filteredCats);
  };

  const handleNameFilterChange = (e) => {
    const value = e.target.value;
    setNameFilter(value);

    if (value === '') {
      setSearchResults(cats.filter((cat) => breedFilter === '' || cat.breed === breedFilter));
    } else {
      handleSearch();
    }
  };

  const handleBreedFilterChange = (e) => {
    const value = e.target.value;
    setBreedFilter(value);

    setSearchResults(cats.filter((cat) => (value === '' || cat.breed === value) && (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase()))));
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      <div className="filters mb-4">
        <select onChange={handleBreedFilterChange} className="form-select d-inline-block w-auto me-2">
          <option value="">Select Breed</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
        <input type="text" placeholder="Search by name" onChange={handleNameFilterChange} value={nameFilter} className="form-control d-inline-block w-auto me-2" />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>

      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {searchResults.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
