import {
  type MaybeRefOrGetter,
  camelize,
  computed,
  toValue,
  inject,
  defineComponent,
} from "vue";

// 為可能需要的上下文創建一個注入鍵
const PropsContextKey = Symbol("PropsContext");

// 在父組件中提供上下文
export function providePropsContext(
  props: Record<string, any>,
  defaults: Record<string, any>
) {
  provide(PropsContextKey, {
    props,
    defaults,
  });
}

export function useForwardProps<T extends Record<string, any>>(
  props: MaybeRefOrGetter<T>
) {
  // 嘗試從上下文中獲取
  const context = inject(PropsContextKey, null);

  if (!context) {
    console.warn(
      "useForwardProps: No props context found. Make sure to call providePropsContext in a parent component."
    );
    return computed(() => ({} as T));
  }

  return computed(() => {
    const propsValue = toValue(props);
    const {props: assignedProps, defaults: defaultProps} = context;

    // 合併屬性並保留有值的屬性
    const result: Record<string, any> = {};
    const allKeys = new Set([
      ...Object.keys(defaultProps),
      ...Object.keys(assignedProps),
    ]);

    for (const key of allKeys) {
      const camelKey = camelize(key);
      if (camelKey in propsValue && propsValue[camelKey] !== undefined) {
        result[camelKey] = propsValue[camelKey];
      }
    }

    return result as T;
  });
}

// 或者使用组合式 API創建一个輔助函數
export function createForwardProps<Props extends Record<string, any>>(options: {
  defaults?: Partial<Props>;
}) {
  return defineComponent({
    setup(props, {slots, attrs, emit}) {
      // 在這裡處理屬性轉送邏輯
      const forwardedProps = computed(() => {
        // 你的處理邏輯
        return {...options.defaults, ...attrs};
      });

      // 提供給子組件
      provide(PropsContextKey, {
        props: attrs,
        defaults: options.defaults || {},
      });

      return () => slots.default?.(forwardedProps.value);
    },
  });
}
