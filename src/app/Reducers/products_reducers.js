export const product_reducer = (state, action) => {
    switch (action.type) {
      case "API_DATA_2":
        return {
          ...state,
          productsdata: Array.isArray(action.payload) ? [...action.payload] : [],
          load:false
        };
  
      case "LIST_FUNC":
        return {
          ...state,
          gridView: false,
          listView: true,
          load:false
        };
  
      case "GRID_FUNC":
        return {
          ...state,
          listView: false,
          gridView: true,
          load:false
        };
  
      case "SORTING_VALUE":
        return {
          ...state,
          sortValue: action.payload,
          load:false
        };
  
      case "SORT_DATA":
        let newsortData;
  
        let temsosrt = Array.isArray(action.payload) ? [...action.payload] : [];
  
        if (state.sortValue === "a-z") {
          newsortData = [...temsosrt].sort((a, b) => a.name.localeCompare(b.name));
        } else if (state.sortValue === "z-a") {
          newsortData = [...temsosrt].sort((a, b) => b.name.localeCompare(a.name));
        } else if (state.sortValue === "lowest") {
          newsortData = [...temsosrt].sort((a, b) => a.price - b.price);
        } else if (state.sortValue === "highest") {
          newsortData = [...temsosrt].sort((a, b) => b.price - a.price);
        }
  
        return {
          ...state,
          productsdata: [...newsortData],
          load:false
        };
  
      case "CLICK_FILTER_ITEMS":
        const data = Array.isArray(action.payload) ? [...action.payload] : [];
        const data2 = data.filter((currentItem) => currentItem.category === action.payload2);
        return {
          ...state,
          productsdata: data2,
          load:false
        };
  
      case "SEARCH_DATA":
        const search = Array.isArray(action.payload) ? [...action.payload] : [];
        const search2 = search.filter((currentItem) =>
          currentItem.name.toLowerCase().includes(action.payload2)
        );
        return {
          ...state,
          productsdata: search2,
          load:false
        };
  
      case "ALL_DATA":
        return {
          ...state,
          productsdata: Array.isArray(action.payload) ? [...action.payload] : [],
        };
  
      
  
      case "COMPANY_UPDATE_DATA":
        return {
          ...state,
         companyValue:Array.isArray(action.payload) ? [...action.payload] : [],
        };
  
        case "FILTER_UPDATE_DATA":
          return {
            ...state,
            filterproducts:Array.isArray(action.payload) ? [...action.payload] : [],
          };
    
    
          
  
  
        case "COMAPNY_SELECT_DATA":
      const  selec_com_data=action.payload.filter((currentItem, index)=>{
        return  currentItem.company===action.payload2;
      })
          return {
            ...state,
           productsdata:selec_com_data,
          };
  
  
        
         
  
  
  
      case "ALL_COM_DATA":
        if (state.companyValue === "all") {
          return {
            ...state,
            productsdata: Array.isArray(action.payload) ? [...action.payload] : [],
            load:false
          };
        }
  
      case "COLOR":
        let colors = Array.isArray(action.payload)
          ? action.payload.flatMap((currentItem) => currentItem.colors || [])
          : [];
        colors = [...new Set(colors)];
        return {
          ...state,
          color: colors,
          load:false
        };
  
      case "COLOR_FILTER":
        let filter_color = Array.isArray(action.payload)
          ? action.payload.filter((currentItem) =>
              currentItem.colors.includes(action.payload2)
            )
          : [];
        return {
          ...state,
          productsdata: filter_color,
          load:false
        };
  
      case "PRICE":
        let price = Array.isArray(action.payload)
          ? action.payload.map((currentItem) => currentItem.price)
          : [];
        let maxprice = price.reduce((initial, current) => Math.max(initial, current), 0);
        return {
          ...state,
          price: maxprice,
          maxPrice: maxprice,
          load:false
        };
  
      case "RANGE_FILTER_DATA":
        const { name, value } = action.payload;
        return {
          ...state,
          [name]: value,
          load:false
        };
  
      case "RANGE_DATA":
        let rangeData;
        const helo = action.payload2;
        if (Array.isArray(action.payload) && state.price) {
          rangeData = action.payload.filter((currentItem) => currentItem.price <= helo);
        }
        // console.log(helo, "dataaa");
        return {
          ...state,
          productsdata: rangeData || [],
          load:false
        };
  
      default:
        return state;
        
    }
  };
  