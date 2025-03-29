import type {Directive} from "vue";
import {useAOS} from "@/composables/useAOS";

const vAos: Directive = {
  mounted(el, binding) {
    const effect = binding.value || "fade-up";

    // Add data attribute for CSS targeting
    el.setAttribute("data-aos", effect);

    // Ensure initial visibility
    el.style.opacity = "1";

    const {registerElement} = useAOS();
    registerElement(el);
  },
};

export default vAos;
