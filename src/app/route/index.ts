import { Router } from "express";



const router = Router();

const moduleroutes = [
    {
        path: '/users',
        route: []
    },
  

]

moduleroutes.forEach((route) => router.use(route.path, route.route))

export default router;