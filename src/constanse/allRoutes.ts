const allRoutes = {
    home: "/",
    products: "/products",
about: "/about",
    contact: "/contact",
    productDetails: (id: string) => `/products/${id}`,
    cart: "/cart",
    checkout: "/checkout",
    profile: "/profile",
    orders: "/orders",
    orderDetails: (orderId: string) => `/orders/${orderId}`,

}
export default allRoutes;