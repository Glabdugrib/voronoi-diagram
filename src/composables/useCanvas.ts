import { onMounted, onUnmounted, type Ref } from "vue";

export const useCanvas = (canvasRef: Ref<HTMLCanvasElement | null>) => {
  let resizeObserver: ResizeObserver | null = null;

  const render = () => {
    const canvas = canvasRef.value;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.scale(dpr, dpr);
  };

  onMounted(() => {
    render();
    resizeObserver = new ResizeObserver(() => render());
    if (canvasRef.value) {
      resizeObserver.observe(canvasRef.value);
    }
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
  });

  return { render };
};
