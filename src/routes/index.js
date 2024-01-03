//layouts

//pages
import HomePage from "../pages/auth/HomePage";
import VideoPage from "../pages/auth/VideoPage";

const publicRoutes = [
    { path: '/' , component: HomePage },
    { path: '/video' , component: VideoPage, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes };