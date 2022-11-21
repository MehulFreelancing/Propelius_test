import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as userServices from '../../services/API/api.service'

export const userSlice = createSlice({
  name: "users",
  initialState: {
    loggedUser: "",
    products: [
      {
        id:1,
        image: "assets/image/product_1.png",
        prod_name: "Apple iPhone 13 Pro Max",
        offer_lab:"Special offer",
        prod_desc: "Rent for AED 139/month",
        category:"Mobile",
        brand:"Apple",
        price:110000
      },
      {
        id:2,
        image:"assets/image/product_2.png",
        prod_name:`MacBook Pro 14" Laptop`,
        prod_desc:"Rent for AED 139/month",
        category:"Leptop",
        brand:"Apple",
        price:150000
      },{
        id:3,
        image:"assets/image/product_3.png",
        prod_name:"Microsoft Xbox Series S",
        offer_lab:"Sale",
        offer_amt:"AED 339 / month",
        prod_desc:"Rent for AED 139/month",
        category:"AED",
        brand:"Sony",
        price:70000
      },{
        id:4,
        image:"assets/image/asus.jpg",
        prod_name:"ASUS TUF Gaming F15 (2021)",
        offer_lab:"Sale",
        offer_amt:"56910 / month",
        prod_desc:"Core i5-10300H 10th Gen, GTX 1650 4GB Graphics",
        category:"Leptop",
        brand:"Asus",
        price:56910
      },
      {
        id:5,
        image:"assets/image/galaxy.jpg",
        prod_name:"Samsung Galaxy Z Flip4 5G",
        offer_lab:"Offer",
        offer_amt:"80000 / month",
        prod_desc:"Bora Purple, 8GB RAM, 128GB Storage",
        category:"Mobile",
        brand:"Samsung",
        price:80000
      },
      {
        id:6,
        image:"assets/image/blackburry.jpg",
        prod_name:"Black berry",
        offer_lab:"",
        offer_amt:"80000 / month",
        prod_desc:"Bora Purple, 8GB RAM, 128GB Storage",
        category:"Mobile",
        brand:"Black berry",
        price:50000
      },
      {
        id:7,
        image:"assets/image/google.jpg",
        prod_name:"Google Pixel",
        offer_lab:"Offer",
        offer_amt:"40000 / month",
        prod_desc:"Bora Purple, 8GB RAM, 128GB Storage",
        category:"Mobile",
        brand:"Google",
        price:70000
      }

    ],
    userProfileData: [],
    loader: false,
  },
  reducers: {
    setLoggedUser: (state, { payload }) => {
      state.loggedUser = { ...state.loggedUser, ...payload };
    },

    userLogin(state, action) {
      state.userData = action.payload;
    },

    profileData(state, action) {
      state.userProfileData = action.payload;
    },

    loaderData(state, action) {
      state.loader = action.payload;
    },
  },
});

export const { setLoggedUser, userLogin, profileData, loaderData } =
  userSlice.actions;

export default userSlice.reducer;
