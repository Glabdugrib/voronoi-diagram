<script setup lang="ts">
import { ref } from "vue";
import { useCanvas } from "@/composables/useCanvas";

const canvasRef = ref<HTMLCanvasElement | null>(null);

useCanvas(canvasRef);
</script>

<template>
  <canvas ref="canvasRef" class="block h-screen w-screen border-4 border-indigo-500"></canvas>
</template>
