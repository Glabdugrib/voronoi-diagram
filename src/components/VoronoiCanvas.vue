<script setup lang="ts">
import { ref } from "vue";
import { useCanvas } from "../composables/useCanvas";
import FloatingControls from "./FloatingControls.vue";

const canvasRef = ref<HTMLCanvasElement | null>(null);

const { render } = useCanvas(canvasRef);
</script>

<template>
  <canvas ref="canvasRef" class="block h-screen w-screen border-5 border-indigo-500"></canvas>
  <FloatingControls @change="render" />
</template>
