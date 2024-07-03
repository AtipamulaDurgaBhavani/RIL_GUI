function showIcons(category) {
    const iconsDiv = document.getElementById('icons');
    const pointerDiv = document.getElementById('pointer');
    let iconsHTML = '';

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('highlight');
        item.classList.remove('hovered');
    });

    // Add highlight and hovered class to the clicked menu item
    event.target.classList.add('highlight');
    event.target.classList.add('hovered');


    if (category === 'supply-chain') {
        iconsHTML = `
            <a href="#"><img src="returns-prediction.png" alt="Returns Prediction"><span>Returns Prediction</span></a>
            <a href="#"><img src="assortment-planning.png" alt="Assortment Planning"><span>Assortment Planning</span></a>
            <a href="#"><img src="inventory-optimization.png" alt="Inventory Optimization"><span>Inventory Optimization</span></a>
            <a href="#"><img src="warehouse-mapping.png" alt="Warehouse Mapping"><span>Warehouse-Retail Outlet Mapping</span></a>
        `;         
    }
    else if(category==='operations')
    {
        iconsHTML = `
            <a href="#"><img src="product-slotting-optimization.png" alt="Product Slotting Optimization"><span>Product Slotting Optimization</span></a>
            <a href="#"><img src="cycle-count-recommendation.png" alt="Cycle Count Recommendation"><span>Cycle Count Recommendation</span></a>
            <a href="#"><img src="product-on-shelf-availability-detection.png" alt="Product On-Shelf Availability Detection"><span>Product On-Shelf Availability Detection</span></a>    
        `;         
   }
   else if(category==='transportation')
   {
        iconsHTML = `
            <a href="#"><img src="dc-store-supply-scheduling.png" alt="DC-Store Supply Scheduling"><span>DC-Store Supply Scheduling</span></a>
            <a href="#"><img src="vehicle-route-optimization.png" alt="Vehicle Route Optimization"><span>Vehicle Route Optimization</span></a>                     
        `;         
   }
   else if(category==='recommendation')
   {
    iconsHTML = `
            <a href="#"><img src="customer-segmentation.png" alt="Customer Segmentation"><span>Customer Segmentation</span></a>
            <a href="#"><img src="product-recommendation.png" alt="Product Recommendation"><span>Product Recommendation</span></a>                     
        `; 
   }
   else if(category==='finance')
   {
    iconsHTML = `
            <a href="#"><img src="document-digitization.png" alt="Document Digitization"><span>Document Digitization</span></a>
                               
        `; 
   }
   else if (category==='people')
   {
    iconsHTML = `
            <a href="#"><img src="dc-manpower-planning.png" alt="DC Manpower Planning"><span>DC Manpower Planning</span></a>
                               
        `; 
   }

    // Add more conditions for other categories if needed

    iconsDiv.innerHTML = iconsHTML;
    // Get the position of the clicked menu item
    const menuItem = event.target;
    const menuItemRect = menuItem.getBoundingClientRect();
    const mainDivRect = document.querySelector('.main').getBoundingClientRect();

    // Show and position the pointer
    pointerDiv.style.display = 'block';
    pointerDiv.style.left = `${menuItemRect.right + -15}px`; // 10px offset to place the pointer to the right
    pointerDiv.style.top = `${menuItemRect.top + window.scrollY + (menuItemRect.height / 2) - (pointerDiv.offsetHeight / 2)}px`;
}