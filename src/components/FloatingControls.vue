<script setup lang="ts">
import { ref } from "vue";
import { config, regeneratePoints } from "@/composables/useVoronoiConfig";
import RepeatIcon from "./icons/RepeatIcon.vue";
import ChrevronDownIcon from "./icons/ChrevronDownIcon.vue";

const collapsed = ref(false);

const emit = defineEmits<{ change: [] }>();

const onRegenerate = () => {
  regeneratePoints();
  emit("change");
};

const onConfigInput = () => {
  emit("change");
};
</script>

<template>
  <div
    class="fixed top-4 right-4 w-64 rounded-xl border-4 border-zinc-500 bg-zinc-900/80 text-sm text-zinc-100 shadow-xl backdrop-blur-md select-none"
  >
    <button
      class="flex w-full cursor-pointer items-center justify-between px-4 py-3 font-medium"
      @click="collapsed = !collapsed"
    >
      <span class="text-lg text-shadow-lg/20">Voronoi Diagram</span>
      <span class="transition-transform duration-200" :class="{ 'rotate-90': collapsed }">
        <ChrevronDownIcon class="h-4 w-4" />
      </span>
    </button>

    <div v-show="!collapsed" class="space-y-4 px-4 pb-4">
      <div class="space-y-1">
        <label class="block text-zinc-400"> Number of points </label>
        <input
          v-model.number="config.numberOfPoints"
          type="number"
          min="2"
          max="50"
          class="w-full rounded-md bg-zinc-800 px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-400"
          @change="onConfigInput"
        />
      </div>

      <div class="space-y-1">
        <label class="block text-zinc-400"> Max coordinate value </label>
        <input
          v-model.number="config.maxCoordinate"
          type="number"
          min="1"
          max="50"
          class="w-full rounded-md bg-zinc-800 px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-400"
          @change="onConfigInput"
        />
      </div>

      <div class="space-y-1">
        <label class="block text-zinc-400">Bounding box padding</label>
        <input
          v-model.number="config.padding"
          type="number"
          min="0"
          max="10"
          step="0.1"
          class="w-full rounded-md bg-zinc-800 px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-400"
          @change="onConfigInput"
        />
      </div>

      <button
        class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-indigo-500 px-3 py-2 text-base font-medium transition hover:bg-indigo-400"
        @click="onRegenerate"
      >
        <RepeatIcon class="h-4 w-4" />
        <span class="mb-0.5">Regenerate</span>
      </button>
    </div>
  </div>
</template>
