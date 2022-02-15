import React from "react";


function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
    } = props;
    
    return (
      <header>
      <div className="container flex-row justify-space-between align-center py-3">
        <h1 className="page-title text-secondary bg-dark py-2 px-3">Marcus H. Ikegami </h1>

        <ul className="flex-row">
            {categories.map((category) => {
               let selectedCategory;
                if (currentCategory.name === category.name && !contactSelected) {
                  selectedCategory = true;
                } else {
                  selectedCategory = false;
                };
            
            return (
              <li className={`ml-2 my-1 px-2 py-1 no-style ${selectedCategory ? 'bg-secondary text-dark' : 'text-secondary bg-dark'}`} 
              key={category.name} onClick={() => {
                setContactSelected(false);
                setCurrentCategory(category);
                console.log(currentCategory);
                console.log(selectedCategory);
                console.log(categories);
              }} 
            ><a className="style-none" href="#top">{category.name}</a></li>
            )}
            )}
            <li key="resume" className={`ml-2 my-1 px-2 py-1 no-style text-secondary bg-dark`} 
            onClick={() => {
              setContactSelected(false);
              setCurrentCategory(categories[0]);
            }
            } ><a className="style-none" href="#resume">Resume</a></li>
            <li className={`ml-2 my-1 px-2 py-1 no-style ${contactSelected ? 'bg-secondary text-dark' : 'text-secondary bg-dark'}`} 
            onClick={() => setContactSelected(true)} key="contact">Contact</li>
        </ul>
        
      </div>
    </header>
    )
}

export default Header;