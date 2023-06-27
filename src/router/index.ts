import { createRouter, createWebHashHistory } from "vue-router";
import ComingSoon from "components/ComingSoon.vue";
import VisualDesign from "pages/html/VisualDesign/index.vue";
import InteractiveDesign from "pages/html/InteractiveDesign/index.vue";
import BackgroundEffect from "pages/html/BackgroundEffect/index.vue";
import ComplexLayout from "pages/html/ComplexLayout/index.vue";
import DynamicButtons from "pages/css/DynamicButtons/index.vue";
import DynamicClock from "pages/canvas/DynamicClock.vue";
import Searchlight from "pages/canvas/Searchlight.vue";
import GlobuleInteraction from "pages/canvas/GlobuleInteraction.vue";
import KillPlanetGame from "pages/canvas/KillPlanetGame.vue";
import FreeFallingBody from "pages/canvas/FreeFallingBody.vue";
import CountDown from "pages/canvas/CountDown/index.vue";
import RippleFloatOnTheWater from "pages/canvas/RippleFloatOnTheWater/index.vue";
import FlowerBloom from "pages/canvas/FlowerBloom/index.vue";
import CodeBgWall from "pages/canvas/CodeBgWall.vue";
import WordDance from "pages/canvas/WordDance.vue";
import Scratch from "pages/canvas/Scratch.vue";

const contentRoutes = [
  {
    path: "/html",
    children: [
      {
        path: "/html/visualDesign",
        component: VisualDesign,
      },
      {
        path: "/html/interactiveDesign",
        component: InteractiveDesign,
      },
      {
        path: "/html/backgroundEffect",
        component: BackgroundEffect,
      },
      {
        path: "/html/complexLayout",
        component: ComplexLayout,
      },
    ],
  },
  {
    path: "/css",
    children: [
      {
        path: "/css/dynamicButtons",
        component: DynamicButtons,
      },
    ],
  },
  {
    path: "/canvas",
    children: [
      {
        path: "/canvas/dynamicClock",
        component: DynamicClock,
      },
      {
        path: "/canvas/searchlight",
        component: Searchlight,
      },
      {
        path: "/canvas/globuleInteraction",
        component: GlobuleInteraction,
      },
      {
        path: "/canvas/killPlanetGame",
        component: KillPlanetGame,
      },
      {
        path: "/canvas/freeFallingBody",
        component: FreeFallingBody,
      },
      {
        path: "/canvas/countDown",
        component: CountDown,
      },
      {
        path: "/canvas/rippleFloatOnTheWater",
        component: RippleFloatOnTheWater,
      },
      {
        path: "/canvas/flowerBloom",
        component: FlowerBloom,
      },
      {
        path: "/canvas/codeBgWall",
        component: CodeBgWall,
      },
      {
        path: "/canvas/wordDance",
        component: WordDance,
      },
      {
        path: "/canvas/scratch",
        component: Scratch,
      },
    ],
  },
  {
    path: "/",
    redirect: "/html/visualDesign",
  },
  {
    path: "/:pathMatch(.*)*",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: contentRoutes,
});

export default router;
