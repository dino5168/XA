import {ref, onMounted, onUnmounted} from "vue";

export function useAOS() {
  // Server-side rendering check
  if (typeof window === "undefined") return {registerElement: () => {}};

  const elements = ref<Element[]>([]);
  let observer: IntersectionObserver | null = null;

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          } else {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold for when animation triggers
        rootMargin: "0px 0px -50px 0px", // Slightly delay animation
      }
    );
  };

  onMounted(() => {
    initObserver();
    if (observer) {
      elements.value.forEach((el) => observer!.observe(el));
    }
  });

  onUnmounted(() => {
    if (observer) {
      elements.value.forEach((el) => observer!.unobserve(el));
      observer.disconnect();
    }
  });

  return {
    registerElement: (el: Element) => {
      elements.value.push(el);
      if (observer) {
        observer.observe(el);
      }
    },
  };
}
