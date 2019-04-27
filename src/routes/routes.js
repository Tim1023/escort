// import modular routes
import webRoutes from "../modules/web/routes"
import escortsRoutes from "../modules/escorts/routes"
import authRoutes from "../modules/auth/routes"
// import userRoutes from "../modules/user/routes"
// import articleRoutes from "../modules/article/routes"

export default [...webRoutes,...escortsRoutes,...authRoutes]
