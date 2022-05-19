import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import EditBlog from "../views/EditBlog.vue";
import ViewBlog from "../views/ViewBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/blogs",
    name: "BlogsView",
    component: Blogs,
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/register",
    name: "RegisterView",
    component: Register,
    meta: {
      title: "Register",
    },
  },
  {
    path: "/forgot-password",
    name: "FogotPasswordView",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
    },
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: Profile,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "AdminView",
    component: Admin,
    meta: {
      title: "admin",
      requiresAuth: true,
    },
  },
  {
    path: "/create-post",
    name: "CreatePostView",
    component: CreatePost,
    meta: {
      title: "Create-post",
      requiresAuth: true,
    },
  },
  {
    path: "/post-preview",
    name: "BlogPreviewView",
    component: BlogPreview,
    meta: {
      title: "Blog-preview",
      requiresAuth: true,
    },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlogView",
    component: ViewBlog,
    meta: {
      title: "view-Blog",
      requiresAuth: true,
    },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlogView",
    component: EditBlog,
    meta: {
      title: "Edit Blog Post",
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Blog`;
  next();
});

export default router;
