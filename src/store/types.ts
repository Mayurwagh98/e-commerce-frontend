export interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  price: number;
  discount: number;
  rating: number;
  description: string;
  stock: number;
  // add other product properties
}

export interface ProductDetailsState {
  productDetails: Product;
  loading: boolean;
  error: string | null;
  setProductDetails: (productDetails: Product) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
