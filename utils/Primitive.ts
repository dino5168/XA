import {
  defineComponent,
  h,
  type PropType,
  type Component,
  type DefineComponent,
} from "vue";
import {Slot} from "./Slot";

// Define `AsTag` type
export type AsTag =
  | "a"
  | "button"
  | "div"
  | "form"
  | "h2"
  | "h3"
  | "img"
  | "input"
  | "label"
  | "li"
  | "nav"
  | "ol"
  | "p"
  | "span"
  | "svg"
  | "ul"
  | "template"
  | ({} & string); // any other string

// Define `PrimitiveProps` interface
export interface PrimitiveProps {
  asChild?: boolean;
  as?: AsTag | Component;
}

// 預先定義自閉合標籤列表
const SELF_CLOSING_TAGS = new Set(["area", "img", "input"]);

// Define the return type of defineComponent with PrimitiveProps
type PrimitiveComponentType = DefineComponent<PrimitiveProps>;

// Add explicit return type to the function
function definePrimitive(): PrimitiveComponentType {
  return defineComponent({
    name: "Primitive",
    inheritAttrs: false,
    props: {
      asChild: {
        type: Boolean,
        default: false,
      },
      as: {
        type: [String, Object] as PropType<AsTag | Component>,
        default: "div",
      },
    },
    setup(props, {attrs, slots}) {
      return () => {
        // Handle the undefined case by using the default "div"
        const asTag = props.asChild ? "template" : props.as || "div";

        if (typeof asTag === "string" && SELF_CLOSING_TAGS.has(asTag)) {
          return h(asTag, attrs);
        }

        if (asTag !== "template") {
          // Use the non-null assertion or provide a fallback
          return h(asTag, attrs, {default: slots.default});
        }

        return h(Slot, attrs, {default: slots.default});
      };
    },
  });
}

// Export the instantiated component
export const Primitive = definePrimitive();
