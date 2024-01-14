# Namaste React

# Nmaste React Github Repo Link

https://github.com/namastedev/namaste-react

# Parcel do these things

- Dev Build
- Create Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Food order app structure

/\*\*

- Header
- - Logo
- - Nav Items
- Body
- - Search
- - ResturantContainer
-      - RestaurantCard
-          - Image
-          - Name of resturant, Rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

# Redux toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Create slice(cartSlice)
 - dispatch(action)
 - Selector



-Normal CSS
.header {
display: flex;
justify-content: space-between;
border: 1px solid black;
}

.login{
padding: 0px 20px;
cursor: pointer;
}

.logo{
width: 90px;
}

.nav-items {
padding: 0px 20px;
}

.nav-items > ul {
display: flex;
font-size: 18px;
list-style-type: none;
}

.nav-items > ul > li {
padding: 10px;
margin: 10px;
}

.search{
padding: 10px;
}

.filter{
display: flex;
}

.filter-btn{
margin: 10px;
cursor: pointer;
}

.res-container{
display: flex;
flex-wrap: wrap;
}

.res-card:hover {
border: 1px solid #000;
cursor: pointer;
}

.res-card{
margin: 5px;
width: 187px;
padding: 5px;
}

.res-logo{
width: 100%;
height: 130px;
}

.shimmer-container{
display: flex;
flex-wrap: wrap;
}
.shimmer-card{
margin: 20px;
width: 200px;
height: 400px;
background-color: #f0f0f0;
}

.user-card{
padding: 10px;
border: 1px solid black;
}

/_ .search-box{
margin: 10px;
} _/
